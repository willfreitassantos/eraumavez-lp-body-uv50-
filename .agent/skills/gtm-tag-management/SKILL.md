---
name: gtm-tag-management
description: Google Tag Manager, GA4, and conversion tracking setup. Funnel tagging, pixel implementation, consent mode, and server-side tracking. Use when setting up GTM, configuring GA4 events, implementing ad pixels, or building conversion funnels.
allowed-tools: Read, Glob, Grep, Write
---

# GTM & Tag Management

> Complete reference for tagging, tracking, and funnel measurement.

---

## 1. GTM Container Setup

### Installation Code

```html
<!-- Head (as high as possible) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>

<!-- Body (immediately after opening tag) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Server-Side GTM (Recommended)

| Provider | Cost | Benefits |
|----------|------|----------|
| Stape.io | $20+/mo | Easy setup, custom domain |
| Cloudflare Workers | ~$5/mo | Fast, global edge |
| Google Cloud Run | Pay per use | Native integration |

---

## 2. Essential Tags by Priority

| Priority | Tag | Purpose |
|----------|-----|---------|
| 🔴 P0 | GA4 Configuration | Base analytics, session data |
| 🔴 P0 | Consent Mode v2 | GDPR/LGPD compliance |
| 🟡 P1 | GA4 Page View | Track all pages |
| 🟡 P1 | Google Ads Conversion | Measure ROAS |
| 🟡 P1 | Meta Pixel | Facebook/Instagram tracking |
| 🟢 P2 | LinkedIn Insight | B2B lead tracking |
| 🟢 P2 | TikTok Pixel | Gen Z audience |
| 🟢 P2 | Microsoft Clarity | Free heatmaps |
| ⚪ P3 | Hotjar | Session recordings |
| ⚪ P3 | HubSpot/CRM | Lead attribution |

---

## 3. Core Triggers

| Trigger | Configuration | Use Case |
|---------|---------------|----------|
| **Page View** | All Pages | GA4 base, pixels |
| **DOM Ready** | All Pages | Load after DOM |
| **Click - All Links** | Click URL contains | Outbound clicks |
| **Click - Specific** | Click ID / Class | CTA tracking |
| **Form Submission** | Form ID / Class | Lead capture |
| **Scroll Depth** | 25%, 50%, 75%, 90% | Engagement |
| **Custom Event** | Event name equals | DataLayer pushes |
| **Timer** | Interval in ms | Time on page |

---

## 4. DataLayer Event Patterns

### Standard Events

```javascript
// Page View (automatic in GA4)
dataLayer.push({ 'event': 'page_view' });

// Lead Generation
dataLayer.push({
  'event': 'generate_lead',
  'lead_source': 'contact_form',
  'lead_value': 100
});

// Form Submit
dataLayer.push({
  'event': 'form_submit',
  'form_id': 'newsletter',
  'form_name': 'Newsletter Signup'
});
```

### Ecommerce Events (GA4)

```javascript
// View Item
dataLayer.push({
  'event': 'view_item',
  'ecommerce': {
    'items': [{
      'item_id': 'SKU001',
      'item_name': 'Produto X',
      'price': 99.90
    }]
  }
});

// Add to Cart
dataLayer.push({
  'event': 'add_to_cart',
  'ecommerce': {
    'items': [{
      'item_id': 'SKU001',
      'item_name': 'Produto X',
      'price': 99.90,
      'quantity': 1
    }]
  }
});

// Purchase
dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T12345',
    'value': 199.99,
    'currency': 'BRL',
    'items': [{
      'item_id': 'SKU001',
      'item_name': 'Produto X',
      'price': 199.99,
      'quantity': 1
    }]
  }
});
```

---

## 4.1. Standardized Event Schema (Recommended)

> **Best Practice:** All events should include consistent context for attribution and analysis.

### Standard Fields (Include in ALL events)

```javascript
// UserContext - Collect once, use everywhere
const standardEventData = {
  // Page context
  page_type: 'home',           // home, about, cases, contact, solutions
  page_path: '/',              // URL path
  page_title: 'Page Title',    // document.title
  page_url: 'https://...',     // Full URL
  // Traffic source (attribution)
  utm_source: '(direct)',      // google, facebook, newsletter
  utm_medium: '(none)',        // cpc, organic, email
  utm_campaign: '(not set)',   // Campaign name
  referrer_domain: '(direct)', // Where user came from
  // Session tracking
  session_id: 'sess_xxx',      // Unique per session
  client_id: 'cid_xxx',        // Persistent across sessions
  time_on_site: 45,            // Seconds since session start
  page_view_number: 3,         // Page count in session
  entry_page: '/',             // First page visited
  // Device
  device_type: 'mobile',       // mobile, tablet, desktop
  viewport_size: '375x667',    // Screen dimensions
  // Timestamp
  event_timestamp: '2026-01-25T14:51:20.151Z'
};
```

### Event Examples with Standard Data

```javascript
// CTA Click
dataLayer.push({
  event: 'cta_click',
  cta_text: 'Quero meu diagnóstico',
  cta_url: '/contact.html',
  ...standardEventData
});

// Scroll Depth
dataLayer.push({
  event: 'scroll_depth',
  depth_percentage: 75,
  ...standardEventData
});

// Generate Lead
dataLayer.push({
  event: 'generate_lead',
  lead_source: 'contact_form',
  form_name: 'Diagnóstico',
  ...standardEventData
});

// Outbound Link
dataLayer.push({
  event: 'outbound_link_click',
  link_url: 'https://linkedin.com/...',
  link_text: 'LinkedIn',
  link_domain: 'linkedin.com',
  ...standardEventData
});

// Consent Update
dataLayer.push({
  event: 'consent_update',
  consent_type: 'all_granted',
  ...standardEventData
});
```

### UserContext Implementation Pattern

```javascript
const UserContext = (function() {
  // UTM from URL
  function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '(direct)',
      utm_medium: params.get('utm_medium') || '(none)',
      utm_campaign: params.get('utm_campaign') || '(not set)'
    };
  }
  
  // Session ID (per tab)
  function getSessionId() {
    let id = sessionStorage.getItem('gtm_session_id');
    if (!id) {
      id = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2,9);
      sessionStorage.setItem('gtm_session_id', id);
    }
    return id;
  }
  
  // Client ID (persistent)
  function getClientId() {
    let id = localStorage.getItem('gtm_client_id');
    if (!id) {
      id = 'cid_' + Date.now() + '_' + Math.random().toString(36).substr(2,9);
      localStorage.setItem('gtm_client_id', id);
    }
    return id;
  }
  
  return { ...getUTMParams(), session_id: getSessionId(), client_id: getClientId() };
})();

function getStandardEventData() {
  return { ...UserContext, event_timestamp: new Date().toISOString() };
}
```

---

## 5. Funnel Events by Stage

| Stage | Event | Parameters |
|-------|-------|------------|
| **Awareness** | page_view, session_start | page_location, page_title |
| **Interest** | scroll, video_start | scroll_depth, video_title |
| **Consideration** | view_item, add_to_wishlist | item_id, item_name |
| **Intent** | add_to_cart, begin_checkout | value, items |
| **Purchase** | purchase | transaction_id, value, currency |
| **Loyalty** | refund, share | method, content_type |

---

## 6. Consent Mode v2 (Required 2024+)

### Default State (Denied)

```javascript
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted'
});
```

### After User Consent

```javascript
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});
```

### Consent Mode Signals

| Signal | Controls |
|--------|----------|
| ad_storage | Ad cookies (Google Ads, Floodlight) |
| ad_user_data | Send user data to Google for ads |
| ad_personalization | Remarketing |
| analytics_storage | GA4 cookies |

---

## 7. Pixel Implementation

### Meta (Facebook) Pixel

```html
<!-- Base Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### Meta Standard Events

```javascript
fbq('track', 'Lead');
fbq('track', 'AddToCart', { value: 99.90, currency: 'BRL' });
fbq('track', 'Purchase', { value: 199.99, currency: 'BRL' });
```

### Google Ads Conversion

```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL',
  'value': 199.99,
  'currency': 'BRL',
  'transaction_id': 'T12345'
});
```

---

## 8. UTM Parameters Standard

```
?utm_source=google          // Traffic source
&utm_medium=cpc             // Marketing medium
&utm_campaign=black_friday  // Campaign name
&utm_content=banner_hero    // Creative variant
&utm_term=automacao         // Keyword (PPC)
```

### UTM Best Practices

| Element | Format | Example |
|---------|--------|---------|
| source | lowercase | google, facebook, newsletter |
| medium | standardized | cpc, organic, email, social |
| campaign | snake_case | black_friday_2026 |
| content | descriptive | banner_hero, cta_footer |

---

## 9. Debug & Validation

### GTM Preview Mode

1. Click Preview in GTM
2. Navigate to your site
3. Check Tag Assistant panel
4. Verify tags fire on correct triggers

### GA4 DebugView

1. Install GA Debugger Chrome extension
2. Or add `?debug_mode=true` to URL
3. Go to GA4 > Admin > DebugView
4. Watch events in real-time

### Common Debug Checks

| Check | Tool | What to Look For |
|-------|------|------------------|
| Tag firing | GTM Preview | Green checkmarks |
| Event params | GA4 DebugView | Correct values |
| Network | Chrome DevTools | 200 responses |
| Consent | GTM Preview | Consent state |

---

## 10. Common Issues & Fixes

| Problem | Cause | Solution |
|---------|-------|----------|
| Tags not firing | Wrong trigger | Check trigger conditions in Preview |
| Duplicate events | Multiple tags | Add "Once per page" trigger option |
| No data in GA4 | Filters/delay | Wait 24-48h or use DebugView |
| Consent blocking | Not configured | Implement Consent Mode v2 |
| Wrong ROAS | Static values | Use dynamic dataLayer values |
| Cross-domain issues | Missing config | Add cross-domain linker |

---

## 11. Tag Checklist

### Setup Phase

- [ ] GTM container installed in `<head>` and `<body>`
- [ ] GA4 stream created and connected
- [ ] Consent Mode v2 configured
- [ ] Server-side tracking (optional but recommended)

### Core Tracking

- [ ] Page views tracking all pages
- [ ] Scroll depth (90%) for engagement
- [ ] Outbound link clicks
- [ ] Form submissions
- [ ] Custom events for key actions

### Ecommerce (if applicable)

- [ ] view_item on product pages
- [ ] add_to_cart events
- [ ] begin_checkout event
- [ ] purchase event with transaction data

### Ad Pixels

- [ ] Google Ads conversion + remarketing
- [ ] Meta Pixel with standard events
- [ ] LinkedIn Insight (B2B)
- [ ] TikTok Pixel (if targeting Gen Z)

### Validation

- [ ] All tags tested in GTM Preview
- [ ] Events verified in GA4 DebugView
- [ ] Conversion values accurate
- [ ] No duplicate events

---

## 12. Funnel Analysis Setup (GA4)

### Creating Funnel Exploration

1. GA4 > Explore > Funnel exploration
2. Add steps: Landing → Form Start → Form Submit → Thank You
3. Set "Open funnel" or "Closed funnel"
4. Apply segments for traffic sources
5. Analyze drop-off points

### Key Funnel Metrics

| Metric | Target | Action if Low |
|--------|--------|---------------|
| Landing → Lead | >5% | Improve CTA, social proof |
| Cart → Checkout | >50% | Reduce friction, add trust |
| Checkout → Purchase | >70% | Simplify, add payment options |

---

> **Remember:** Tags without strategy are just noise. Define your funnel first, then instrument every step. Test obsessively, iterate continuously.

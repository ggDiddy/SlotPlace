# Single Casino Review Template - Usage Guide

This document explains how to use the `single-casino-review-template.html` file to create individual casino review pages.

## Overview

The template is a standalone HTML file that contains all review sections without the sidebar or dynamic JavaScript from the original reviews.html. All casino-specific data has been replaced with **{{PLACEHOLDER}}** tags that you can easily find and replace.

## Quick Start

1. Copy `single-casino-review-template.html` and rename it (e.g., `zinkra-casino-review.html`)
2. Use Find & Replace (Ctrl+H) to replace all placeholders with actual casino data
3. Test the page in a browser
4. Deploy to your website

## Complete Placeholder Reference

### Basic Information

| Placeholder             | Description                   | Example                                                |
| ----------------------- | ----------------------------- | ------------------------------------------------------ |
| `{{CASINO_NAME}}`       | Full casino name              | "Zinkra Casino"                                        |
| `{{CASINO_SHORT_NAME}}` | Short name (for CTAs)         | "Zinkra"                                               |
| `{{CASINO_SLUG}}`       | URL-friendly name             | "zinkra-casino"                                        |
| `{{CASINO_LOGO}}`       | Path to casino logo image     | "./assets/zinkra-casino.webp"                          |
| `{{CASINO_LOGO_URL}}`   | Full URL to logo (for schema) | "https://www.slot-place.com/assets/zinkra-casino.webp" |
| `{{CASINO_URL}}`        | Affiliate link to casino      | "https://record.zinkra.com/..."                        |

### Descriptions

| Placeholder                    | Description                    | Example                                               |
| ------------------------------ | ------------------------------ | ----------------------------------------------------- |
| `{{CASINO_SHORT_DESCRIPTION}}` | Brief description (for meta)   | "Modern online casino with 4,000+ games"              |
| `{{CASINO_HERO_DESCRIPTION}}`  | Hero section description       | "Comprehensive expert review of Zinkra Casino..."     |
| `{{CASINO_FULL_DESCRIPTION}}`  | Detailed description in header | "Zinkra Casino is a modern online gaming platform..." |
| `{{FINAL_VERDICT_TEXT}}`       | Final verdict paragraph        | "Zinkra Casino offers an excellent all-around..."     |

### Ratings & Reviews

| Placeholder                    | Description                  | Example                              |
| ------------------------------ | ---------------------------- | ------------------------------------ |
| `{{RATING_VALUE}}`             | Overall rating number        | "4.6"                                |
| `{{RATING_STARS}}`             | Star rating HTML             | `<i class="bi bi-star-fill"></i>...` |
| `{{REVIEW_COUNT}}`             | Number of reviews            | "3,127"                              |
| `{{RATING_DISTRIBUTION_BARS}}` | HTML for rating distribution | See example below                    |

### Scores

| Placeholder                     | Description               | Example                                     |
| ------------------------------- | ------------------------- | ------------------------------------------- |
| `{{SAFETY_SCORE}}`              | Safety score out of 10    | "9.0"                                       |
| `{{PAYMENT_SCORE}}`             | Payment score out of 10   | "8.7"                                       |
| `{{BONUS_SCORE}}`               | Bonus score out of 10     | "8.5"                                       |
| `{{UI_SCORE}}`                  | UI/UX score out of 10     | "8.9"                                       |
| `{{SAFETY_SCORE_DESCRIPTION}}`  | Safety score explanation  | "This casino implements robust security..." |
| `{{PAYMENT_SCORE_DESCRIPTION}}` | Payment score explanation | "Wide variety of payment options..."        |
| `{{BONUS_SCORE_DESCRIPTION}}`   | Bonus score explanation   | "Generous welcome package..."               |
| `{{UI_SCORE_DESCRIPTION}}`      | UI score explanation      | "Clean, modern interface..."                |

### Licensing & Security

| Placeholder                          | Description                 | Example                           |
| ------------------------------------ | --------------------------- | --------------------------------- |
| `{{LICENSE_AUTHORITY}}`              | Licensing body              | "Curaçao eGaming"                 |
| `{{LICENSE_NUMBER}}`                 | License number              | "8048/JAZ2020-013"                |
| `{{ENCRYPTION_TYPE}}`                | Encryption standard         | "256-bit SSL Encryption"          |
| `{{ENCRYPTION_DESCRIPTION}}`         | Encryption details          | "Industry standard protection"    |
| `{{FAIR_GAMING_CERT}}`               | Fair gaming certification   | "RNG Certified"                   |
| `{{FAIR_GAMING_DESCRIPTION}}`        | Fair gaming details         | "Independently tested games"      |
| `{{RESPONSIBLE_GAMING_TOOLS}}`       | Responsible gaming features | "Self-exclusion tools"            |
| `{{RESPONSIBLE_GAMING_DESCRIPTION}}` | Responsible gaming details  | "Deposit limits & reality checks" |

### Payments

| Placeholder                 | Description                   | Example           |
| --------------------------- | ----------------------------- | ----------------- |
| `{{MIN_DEPOSIT}}`           | Minimum deposit amount        | "€20"             |
| `{{MIN_WITHDRAWAL}}`        | Minimum withdrawal amount     | "€20"             |
| `{{WITHDRAWAL_TIME}}`       | Withdrawal processing time    | "24-48h"          |
| `{{PAYMENT_METHODS_ICONS}}` | HTML for payment method icons | See example below |

### Bonuses

| Placeholder              | Description                 | Example                            |
| ------------------------ | --------------------------- | ---------------------------------- |
| `{{WELCOME_BONUS}}`      | Welcome bonus text          | "100% up to €800 + 100 Free Spins" |
| `{{BONUS_DETAILS_LIST}}` | HTML list of bonus details  | See example below                  |
| `{{ONGOING_PROMOTIONS}}` | HTML for ongoing promotions | See example below                  |

### Content Lists

| Placeholder             | Description                  | Example           |
| ----------------------- | ---------------------------- | ----------------- |
| `{{PROS_LIST}}`         | HTML list of pros            | See example below |
| `{{CONS_LIST}}`         | HTML list of cons            | See example below |
| `{{USER_REVIEWS_LIST}}` | HTML for user reviews        | See example below |
| `{{FAQ_ITEMS}}`         | HTML for FAQ accordion items | See example below |

### Screenshots

| Placeholder               | Description                  | Example           |
| ------------------------- | ---------------------------- | ----------------- |
| `{{DESKTOP_SCREENSHOTS}}` | HTML for desktop screenshots | See example below |
| `{{MOBILE_SCREENSHOTS}}`  | HTML for mobile screenshots  | See example below |

---

## HTML Examples for Complex Placeholders

### `{{RATING_STARS}}`

```html
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-half"></i>
```

### `{{RATING_DISTRIBUTION_BARS}}`

```html
<div class="mb-2">
  <div class="d-flex align-items-center">
    <span class="me-2 small">5★</span>
    <div class="progress flex-grow-1 me-2" style="height: 8px">
      <div class="progress-bar bg-success" style="width: 68%"></div>
    </div>
    <span class="small text-muted">68%</span>
  </div>
</div>
<div class="mb-2">
  <div class="d-flex align-items-center">
    <span class="me-2 small">4★</span>
    <div class="progress flex-grow-1 me-2" style="height: 8px">
      <div class="progress-bar bg-success" style="width: 20%"></div>
    </div>
    <span class="small text-muted">20%</span>
  </div>
</div>
<!-- Continue for 3★, 2★, 1★ -->
```

### `{{PAYMENT_METHODS_ICONS}}`

```html
<div class="col-6 col-md-3 mb-2">
  <div class="border rounded p-2 text-center">
    <i class="bi bi-credit-card fs-4 text-primary"></i>
    <small class="d-block">Visa/Mastercard</small>
  </div>
</div>
<div class="col-6 col-md-3 mb-2">
  <div class="border rounded p-2 text-center">
    <i class="bi bi-currency-bitcoin fs-4 text-warning"></i>
    <small class="d-block">Bitcoin</small>
  </div>
</div>
<div class="col-6 col-md-3 mb-2">
  <div class="border rounded p-2 text-center">
    <i class="bi bi-wallet2 fs-4 text-success"></i>
    <small class="d-block">E-Wallets</small>
  </div>
</div>
<div class="col-6 col-md-3 mb-2">
  <div class="border rounded p-2 text-center">
    <i class="bi bi-phone fs-4 text-info"></i>
    <small class="d-block">Mobile Pay</small>
  </div>
</div>
```

### `{{BONUS_DETAILS_LIST}}`

```html
<li><i class="bi bi-check text-success me-2"></i>Minimum deposit: €20</li>
<li>
  <i class="bi bi-check text-success me-2"></i>Wagering requirements: 35x bonus
</li>
<li>
  <i class="bi bi-check text-success me-2"></i>Free spins on popular slots
</li>
<li><i class="bi bi-check text-success me-2"></i>Bonus valid for 30 days</li>
```

### `{{ONGOING_PROMOTIONS}}`

```html
<div class="col-md-6 mb-3">
  <div class="border rounded p-3">
    <h5 class="h6 fw-bold">Reload Bonus</h5>
    <p class="small text-muted mb-2">50% up to $200 every Monday</p>
    <span class="badge bg-primary">Weekly</span>
  </div>
</div>
<div class="col-md-6 mb-3">
  <div class="border rounded p-3">
    <h5 class="h6 fw-bold">Cashback</h5>
    <p class="small text-muted mb-2">10% weekly cashback on losses</p>
    <span class="badge bg-primary">Weekly</span>
  </div>
</div>
<div class="col-md-6 mb-3">
  <div class="border rounded p-3">
    <h5 class="h6 fw-bold">VIP Program</h5>
    <p class="small text-muted mb-2">Exclusive rewards & faster withdrawals</p>
    <span class="badge bg-warning text-dark">VIP</span>
  </div>
</div>
<div class="col-md-6 mb-3">
  <div class="border rounded p-3">
    <h5 class="h6 fw-bold">Free Spins</h5>
    <p class="small text-muted mb-2">50 free spins every weekend</p>
    <span class="badge bg-primary">Weekly</span>
  </div>
</div>
```

### `{{PROS_LIST}}`

```html
<li class="mb-2">
  <i class="bi bi-check2 text-success me-2"></i>
  <span class="text-dark">Extensive game library with 5,000+ titles</span>
</li>
<li class="mb-2">
  <i class="bi bi-check2 text-success me-2"></i>
  <span class="text-dark">Crypto-friendly with fast withdrawals</span>
</li>
<li class="mb-2">
  <i class="bi bi-check2 text-success me-2"></i>
  <span class="text-dark">24/7 customer support via live chat</span>
</li>
<!-- Add more pros -->
```

### `{{CONS_LIST}}`

```html
<li class="mb-2">
  <i class="bi bi-x text-danger me-2"></i>
  <span class="text-dark">High wagering requirements (40x)</span>
</li>
<li class="mb-2">
  <i class="bi bi-x text-danger me-2"></i>
  <span class="text-dark">Restricted in many countries</span>
</li>
<li class="mb-2">
  <i class="bi bi-x text-danger me-2"></i>
  <span class="text-dark">No dedicated mobile app</span>
</li>
<!-- Add more cons -->
```

### `{{USER_REVIEWS_LIST}}`

```html
<div class="d-flex mb-3">
  <div class="me-3">
    <div
      class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
      style="width: 50px; height: 50px"
    >
      <span class="fw-bold">JD</span>
    </div>
  </div>
  <div class="flex-grow-1">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <div>
        <h5 class="h6 fw-bold mb-0">John D.</h5>
        <div class="text-warning small">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
      </div>
      <small class="text-muted">2 days ago</small>
    </div>
    <p class="mb-2">
      Great casino with fast withdrawals! I received my Bitcoin withdrawal
      within 2 hours.
    </p>
    <div class="d-flex gap-2">
      <span class="badge bg-light text-dark"
        ><i class="bi bi-hand-thumbs-up me-1"></i>Helpful (45)</span
      >
    </div>
  </div>
</div>
<!-- Add more reviews -->
```

### `{{FAQ_ITEMS}}`

```html
<div class="accordion-item border-0 mb-2">
  <h2 class="accordion-header" id="faq1">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse1"
      aria-expanded="false"
      aria-controls="collapse1"
    >
      <i class="bi bi-chevron-right me-2 accordion-icon"></i>
      Is Zinkra Casino licensed and safe to play at?
    </button>
  </h2>
  <div
    id="collapse1"
    class="accordion-collapse collapse"
    aria-labelledby="faq1"
    data-bs-parent="#casinoFAQ"
  >
    <div class="accordion-body">
      Yes, Zinkra Casino operates under a Curaçao eGaming license...
    </div>
  </div>
</div>
<div class="accordion-item border-0 mb-2">
  <h2 class="accordion-header" id="faq2">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse2"
      aria-expanded="false"
      aria-controls="collapse2"
    >
      <i class="bi bi-chevron-right me-2 accordion-icon"></i>
      How long do withdrawals take?
    </button>
  </h2>
  <div
    id="collapse2"
    class="accordion-collapse collapse"
    aria-labelledby="faq2"
    data-bs-parent="#casinoFAQ"
  >
    <div class="accordion-body">
      Withdrawal processing times vary by payment method...
    </div>
  </div>
</div>
<!-- Add more FAQ items -->
```

### `{{DESKTOP_SCREENSHOTS}}`

```html
<div class="col-md-6">
  <div class="position-relative screenshot-item">
    <img
      src="./assets/BC.game-loby.webp"
      alt="Zinkra Casino Homepage Desktop"
      class="img-fluid rounded shadow-sm w-100"
      style="cursor: pointer; border: 2px solid #e0e0e0"
      data-bs-toggle="modal"
      data-bs-target="#screenshotModal"
    />
    <div
      class="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 rounded-bottom"
    >
      <small class="fw-bold"
        ><i class="bi bi-house-door me-1"></i>Homepage</small
      >
    </div>
  </div>
</div>
<div class="col-md-6">
  <div class="position-relative screenshot-item">
    <img
      src="./assets/BC.game-Slots.webp"
      alt="Zinkra Casino Games Library Desktop"
      class="img-fluid rounded shadow-sm w-100"
      style="cursor: pointer; border: 2px solid #e0e0e0"
      data-bs-toggle="modal"
      data-bs-target="#screenshotModal"
    />
    <div
      class="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 rounded-bottom"
    >
      <small class="fw-bold"
        ><i class="bi bi-controller me-1"></i>Games Library</small
      >
    </div>
  </div>
</div>
<!-- Add more screenshots -->
```

### `{{MOBILE_SCREENSHOTS}}`

```html
<div class="col-6 col-md-3">
  <div class="position-relative screenshot-item">
    <img
      src="./assets/screenshot-mobile-homepage.jpg"
      alt="Casino Homepage Mobile"
      class="img-fluid rounded shadow-sm w-100"
      style="cursor: pointer; border: 2px solid #e0e0e0; aspect-ratio: 9/16; object-fit: cover;"
      data-bs-toggle="modal"
      data-bs-target="#screenshotModal"
    />
    <div
      class="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 rounded-bottom"
    >
      <small class="fw-bold d-block text-center"
        ><i class="bi bi-house-door me-1"></i>Homepage</small
      >
    </div>
  </div>
</div>
<!-- Add more mobile screenshots -->
```

---

## Step-by-Step Replacement Example

Let's create a review for "Zinkra Casino":

### Step 1: Basic Information

```
Find: {{CASINO_NAME}}
Replace with: Zinkra Casino

Find: {{CASINO_SHORT_NAME}}
Replace with: Zinkra

Find: {{CASINO_SLUG}}
Replace with: zinkra-casino

Find: {{CASINO_LOGO}}
Replace with: ./assets/zinkra-casino.webp

Find: {{CASINO_URL}}
Replace with: https://record.zinkra.com/_FxWznIUl6-FZSuvhn4yj1mNd7ZgqdRLk/1/?pg=1
```

### Step 2: Ratings

```
Find: {{RATING_VALUE}}
Replace with: 4.6

Find: {{REVIEW_COUNT}}
Replace with: 3,127
```

### Step 3: Scores

```
Find: {{SAFETY_SCORE}}
Replace with: 9.0

Find: {{PAYMENT_SCORE}}
Replace with: 8.7

Find: {{BONUS_SCORE}}
Replace with: 8.5

Find: {{UI_SCORE}}
Replace with: 8.9
```

### Step 4: Continue for all other placeholders...

---

## Tips & Best Practices

1. **Save First**: Always save the original template file before making changes
2. **Work in Order**: Replace placeholders from top to bottom
3. **Use Find & Replace All**: For repeated placeholders like `{{CASINO_NAME}}`
4. **Verify HTML**: Check that HTML replacements are properly formatted
5. **Test Responsively**: View the page on different screen sizes
6. **Check Links**: Ensure all affiliate links and images work
7. **SEO Check**: Verify meta tags and structured data are filled correctly
8. **Validate**: Use W3C HTML validator to check for errors

---

## What Was Removed from Original

The template has been simplified by removing:

- Left sidebar with casino card switcher
- Dynamic JavaScript for content switching
- Multiple casino data storage in JavaScript
- Casino selection functionality
- Active state management for cards

## What Was Kept

All review content sections:

- Full HTML header with meta tags
- Navigation bar
- Hero section
- Casino header card
- Safety & Licensing panel
- Payments & Withdrawals panel
- Bonuses & Promotions panel
- User Reviews panel with rating distribution
- Screenshots gallery (desktop/mobile tabs)
- Pros & Cons panel
- FAQ accordion
- Final Verdict panel
- Footer
- Simplified JavaScript for modal and accordion animations

---

## Need Help?

If you encounter any issues or need clarification on any placeholder, refer to the original `reviews.html` file to see how the data is structured for the existing casinos (Zinkra, BC.Game, Casino Brango).

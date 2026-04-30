---
name: LeadWidget Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b55d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max-width: 1200px
  gutter: 1.5rem
  section-padding: 6rem
  element-gap: 1rem
---

## Brand & Style
This design system is engineered for high-conversion SaaS environments, emphasizing clarity, professional rigour, and a "cutting-edge" technical feel. The aesthetic is rooted in **Minimalism** and **Modern Corporate** styles, heavily influenced by the shadcn/ui philosophy of functional elegance. 

The UI should evoke a sense of immediate utility and trust. By prioritizing generous whitespace and a restricted color palette, the design system directs user attention toward conversion points and value propositions. It avoids unnecessary decoration, relying instead on precise alignment, subtle borders, and refined typography to communicate quality.

## Colors
The color strategy utilizes a "High-Signal" approach. The background remains a pristine white to maximize legibility and perceived space. The primary **Indigo (#6366f1)** is reserved strictly for interactive elements (CTAs, links, active states) and key brand moments to ensure it acts as a visual magnet.

Neutral tones are pulled from the **Slate** and **Zinc** palettes. Use Slate-900 for primary headings to provide a softer contrast than pure black, while Slate-500 is used for secondary body text. Borders and dividers utilize light grays (Slate-200) to maintain structure without creating visual noise.

## Typography
This design system relies on **Inter** to deliver a systematic, utilitarian aesthetic that excels in readability. Hierarchy is established through aggressive weight differentials rather than just size. 

Headings (H1-H3) should utilize "Extra Bold" or "Bold" weights with slightly tightened letter-spacing to create a compact, high-impact look for marketing copy. Body text remains at "Regular" weight (400) for long-form readability, while interactive labels and buttons use "Medium" or "Semi-Bold" (500-600) to distinguish them from static content.

## Layout & Spacing
The layout follows a **Fixed Grid** model for the landing page content, centered with a maximum width of 1200px to ensure optimal line lengths and focus. A 12-column system is used for component placement, allowing for flexible arrangements of features and benefits.

A strict 4px/8px baseline grid maintains rhythmic consistency. Section vertical padding is generous (96px to 128px) to provide a "breathable" premium feel. Components within cards or sections should use a standard 16px (1rem) or 24px (1.5rem) padding to maintain internal balance.

## Elevation & Depth
Depth is conveyed primarily through **Low-contrast outlines** and **Ambient shadows**. This design system avoids heavy drop shadows in favor of 1px borders in Slate-200. 

For interactive cards and dropdowns, use a multi-layered, ultra-soft shadow: 
- **Small Shadow:** 0 1px 2px 0 rgba(0, 0, 0, 0.05).
- **Medium Shadow (Hover states):** 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1).

This approach creates a "flat-plus" look where elements feel integrated with the surface rather than floating high above it.

## Shapes
The shape language is defined by a **Rounded** philosophy (0.5rem / 8px default). This provides a approachable, modern feel that avoids the clinical coldness of sharp corners while remaining more professional than fully pill-shaped components.

- **Standard Components:** 8px (Buttons, Inputs, Small Cards).
- **Large Containers:** 12px to 16px (Feature sections, Hero image wrappers).
- **Badges:** Use a higher radius (full round) to distinguish them as distinct pill-shaped identifiers.

## Components
- **Buttons:** The primary CTA uses the vibrant Indigo background with white text. Ghost buttons use a transparent background with an Indigo border or text. All buttons have a subtle inner-top highlight and an 8px corner radius.
- **Cards:** White background, 1px Slate-200 border, and an 8px radius. Use for feature blocks and testimonials. On hover, increase the shadow depth slightly.
- **Accordions:** Clean horizontal dividers (1px Slate-200). Use a chevron-down icon that rotates 180 degrees on expansion. Bold headings for the trigger labels.
- **Input Fields:** 1px border with a focus state that adds a 2px Indigo ring with an offset. Text should be 14px for a compact, professional data-entry feel.
- **Badges:** Small, uppercase text with extra letter spacing. Use light tinted backgrounds (Indigo-50) with Indigo-600 text for a "soft highlight" effect.
- **Lead Widgets:** Floating conversion tools should use a "Medium Shadow" to appear slightly elevated over the main content, emphasizing their priority.
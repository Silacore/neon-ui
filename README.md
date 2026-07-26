# @neondijital/neon-ui

> Production-ready React component library with a cyberpunk aesthetic. 35 interactive components built on Tailwind CSS and Framer Motion.

[![npm version](https://img.shields.io/npm/v/@neondijital/neon-ui)](https://www.npmjs.com/package/@neondijital/neon-ui)
[![npm downloads](https://img.shields.io/npm/dm/@neondijital/neon-ui)](https://www.npmjs.com/package/@neondijital/neon-ui)
[![license](https://img.shields.io/npm/l/@neondijital/neon-ui)](https://github.com/Silacore/neon-ui/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@neondijital/neon-ui)](https://bundlephobia.com/package/@neondijital/neon-ui)

`neon-ui` is a React component library for building interfaces with a cyberpunk, glassmorphism, and sci-fi HUD aesthetic. Every component is animated, typed with TypeScript, and ready to drop into a production application.

**[Live demo: neondijital.com/neon-lab](https://neondijital.com/neon-lab)**

Built and maintained by [NeonDijital](https://neondijital.com).

## Features

- 35 animated React components, no configuration required
- TypeScript types included
- Tailwind CSS utility classes, no CSS-in-JS runtime
- Framer Motion animations
- Tree-shakeable ES modules
- Works with React 18 and above

## Installation

```bash
npm install @neondijital/neon-ui
```

### Peer dependencies

```bash
npm install react framer-motion lucide-react
```

Tailwind CSS must be configured in your project. If you do not have it yet, follow the [Tailwind installation guide](https://tailwindcss.com/docs/installation).

## Quick start

```tsx
import { LiquidButton, GlassCard, PlasmaToggle } from "@neondijital/neon-ui";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <GlassCard>
        <LiquidButton>Launch</LiquidButton>
        <PlasmaToggle />
      </GlassCard>
    </div>
  );
}
```

## Components

### Buttons

| Component | Description |
| --- | --- |
| `LiquidButton` | Action button with a liquid fill animation |
| `PortalButton` | Button with a wormhole opening effect |
| `MagneticButton` | Button that follows the cursor with magnetic physics |
| `StealthButton` | Guarded button behind a safety cover |

### Inputs and controls

| Component | Description |
| --- | --- |
| `CyberInput` | Text input with an animated neon underline |
| `PlasmaToggle` | Switch control with a glowing plasma trail |
| `PlasmaSlider` | Power slider that shifts color across its range |
| `CryoSwitch` | Switch with a freezing frost effect |
| `SlideToHack` | Slide-to-unlock control |
| `SecurityKeypad` | Numeric security keypad |

### Cards and surfaces

| Component | Description |
| --- | --- |
| `GlassCard` | Glassmorphism card with blurred backdrop |
| `HudCard` | Sci-fi heads-up display panel |
| `HoloProductCard` | 3D tilting product card |
| `NeonCreditCard` | Rotating credit card display |
| `HoloProfile` | Holographic profile card |
| `QuantumTestimonial` | Auto-rotating testimonial carousel |
| `HoloPricing` | Holographic pricing table |

### Text and loaders

| Component | Description |
| --- | --- |
| `GlitchText` | Text that distorts on hover |
| `QuantumLoader` | Loading indicator styled as a reactor core |

### Data visualization

| Component | Description |
| --- | --- |
| `HoloChart` | Holographic chart |
| `HoloRadar` | Spherical radar sweep |
| `CyberTable` | Terminal-style data table |
| `SonicVisualizer` | Audio waveform visualizer |

### Security and forms

| Component | Description |
| --- | --- |
| `BiometricScanner` | Animated fingerprint scan indicator |
| `BiometricAccess` | Biometric access panel |
| `SecureUplink` | Encrypted contact form |
| `NeuralUpload` | Upload zone with a laser scan animation |
| `SentientAI` | AI chat interface shell |

### Backgrounds and animations

| Component | Description |
| --- | --- |
| `ArcReactor` | Rotating energy core |
| `BioHelix` | Animated DNA helix |
| `NeuralGrid` | Interactive neural network grid |
| `NeuralCanvas` | Canvas-based particle network |
| `CyberStream` | Matrix-style terminal stream |

### Navigation

| Component | Description |
| --- | --- |
| `NexusCommand` | Command palette |
| `OrbitalSocial` | Orbital social media menu |

## Browser support

Modern evergreen browsers. Glassmorphism components require CSS `backdrop-filter` support.

## Contributing

Issues and pull requests are welcome at [github.com/Silacore/neon-ui](https://github.com/Silacore/neon-ui).

## License

MIT

---

Part of [NeonDijital](https://neondijital.com), a privacy-first software studio building tools like [NeonCore](https://neondijital.com/urunler/neoncore), a Windows desktop AI assistant.

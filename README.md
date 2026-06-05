# Quadri Emmanuel — Portfolio

Next.js 14 App Router · React Three Fiber · Framer Motion · TypeScript · Tailwind CSS

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

---

## How to edit your projects

Open **`lib/projects.ts`** — every project is one object in the array.

```ts
{
  id: '01',
  title: 'Project Title',
  role: 'UI/UX Design',
  year: '2024',
  description: 'One or two sentences that appear under the title.',
  tags: ['UI/UX', 'EdTech'],
  image: '/images/my-screenshot.jpg',   // ← add screenshot here
  link: 'https://your-case-study.com',  // ← or '#' to hide
}
```

**To add a project image:**
1. Export a screenshot from Figma / take a screen capture.
2. Drop the file into `public/images/`.
3. Set `image: '/images/your-filename.jpg'` in the project object.

**To add / remove projects**, add or delete objects from the array.  
Re-order them by moving objects up or down — they render in array order.

---

## How to change the accent colour

Open **`tailwind.config.ts`** and change the `amber` hex value:

```ts
amber: '#C8965A',   // ← swap this for any colour you like
```

Then update the matching CSS variable in **`app/globals.css`**:

```css
--amber: #C8965A;
```

---

## How to update your social links

Open **`components/Contact.tsx`** and uncomment / edit the `socials` array:

```ts
const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_HANDLE' },
  { label: 'Behance',  href: 'https://behance.net/YOUR_HANDLE' },
]
```

---

## How to update your phone number or name

Open **`components/Contact.tsx`** and find the footer row near the bottom.  
Change the text inside the `<span>` element:

```tsx
<span>Quadri Emmanuel Adetayo · Lagos, Nigeria · +234 903 657 8466</span>
```

---

## File map — what lives where

| File | What it controls |
|------|-----------------|
| `lib/projects.ts` | All project data (title, description, tags, links, images) |
| `tailwind.config.ts` | Colour palette and font families |
| `app/globals.css` | CSS variables, base styles, film-grain overlay |
| `app/layout.tsx` | Page metadata (title, description) and font loading |
| `components/Hero.tsx` | Hero headline, tagline, CTA buttons |
| `components/HeroScene.tsx` | 3D wireframe orb — camera, colours, rotation speed |
| `components/About.tsx` | Bio text, tool tags, stats |
| `components/Contact.tsx` | Email address, social links, footer text |
| `components/Nav.tsx` | Navigation logo and links |
| `public/images/` | Drop your project screenshots here |

---

## Deployment

### Vercel (recommended — zero config)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag-drop the .next folder, or connect the repo
```

---

## Tech stack

- **Next.js 14.2** (App Router, server components)
- **React Three Fiber 8** + **@react-three/drei** — 3D scene (dynamically imported, SSR disabled)
- **Framer Motion 11** — scroll-reveal and load animations
- **Tailwind CSS 3** — utility styling
- **TypeScript** throughout
- **Cormorant Garamond** (display serif) + **DM Sans** (grotesque body) via `next/font/google`

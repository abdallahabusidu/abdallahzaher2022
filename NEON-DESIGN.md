# Neon portfolio implementation

Implements the approved neon portfolio concept with real HTML content, responsive navigation, generated artwork, product pages, an archive, and the existing career history.

## Run

Use `npm ci`, then `npm run dev -- --port 3100`. For production, use `npm run build` and `npm run start -- --port 3100`.

## Content and structure

- `pages/index.tsx`: hero, selected work, expertise, experience.
- `components/NeonLayout.tsx`: shared navigation and contact footer.
- `styles/Neon.module.css`: responsive neon design system.
- `data/projectsData.ts`: existing 91-project archive, unchanged.
- `data/experience.ts`: original career entries extracted from the legacy component.
- `data/featuredWork.ts`: featured project artwork, summaries, and engineering details drawn from the original content.
- `pages/work/[slug].tsx`: four statically generated project pages.
- `pages/projects/index.tsx`: searchable archive with combined category filtering and empty-state reset.

The original unused components/assets remain available. No awards, testimonials or new product metrics were introduced. Earlier generated cover concepts are retained as assets. The current showcases use the supplied Koapath v3 artwork, Douoon's logo and explanatory diagrams for the other products. Old app captures are excluded.

## Motion and performance

The layered hero uses GSAP entrance, pointer and scroll motion, plus CSS orbital lighting and floating panels. A pause control and reduced-motion preferences disable motion. The journey uses animated accordions. Hover treatments use CSS, navigation uses native scrolling, and mobile navigation supports Escape. No remote fonts or WebGL runtime are required. Production imagery is optimized to WebP, with hero layers prioritized and product artwork lazy-loaded.

## Latest product showcases

`components/ProjectShowcase.tsx` shares responsive product visuals between the homepage and detail pages. Koapath's four images come from the user-supplied `koapath-app-store-v3` set: trainee tasks, coach home, trainee journey and coach templates. Selection and enlarged previews preserve the supplied artwork. `data/projectStories.ts` holds the corresponding explanations and NearMiss pipeline stages. `EngineeringSection.tsx` and `JourneySection.tsx` provide the interactive engineering and career sections.

## Generated artwork

Created individually in this chat using the built-in image generation tool; original generations remain in the generation library. Production assets are in `public/art/`.

### neon-hero.webp

Reference: the approved `outputs/neon-portfolio-concept.png`.

Prompt: Generate a standalone production hero background artwork matching the TOP HERO of this approved website concept. Wide landscape 16:9. Keep the exact portrait identity, sunglasses, black clothing and coral rim lighting of the man from the reference. Place man on right 48% of frame from chest upwards, looking left. Coral luminous orbital arc behind him, two subtle floating glass code panels without readable words, dark rocky mountains along bottom edge. Left 50% is near-black navy empty negative space for HTML text. Cinematic premium detailed photographic composite. Remove ALL website text, nav, logos, headings, buttons and cards. This is background art only. Near-black #090c16 edges for seamless blending.

### neon-koapath.webp

Prompt: Use case: stylized-concept. Standalone landscape 3:2 editorial background art for Koapath fitness coaching portfolio project. Athletic male runner in black sportswear captured mid sprint on right half, cinematic side view, coral-red rim light across shoulders, abstract sweeping red energy ribbon and dark mountain textures. Near-black burgundy background, left 45% dark empty space for HTML titles. Rich detailed premium sports campaign photography, powerful momentum, restrained neon. No text no letters no numbers no logos no UI no devices. This is illustrative concept art.

### neon-douoon.webp

Prompt: Use case: stylized-concept. Standalone landscape 3:2 conceptual editorial background for Douoon debt-agreement app portfolio. Elegant Islamic courtyard architecture on right half, intricate arch framing a distant warmly lit dome, a single brass lantern hanging from the arch, green-black stone and warm gold light, tranquil dusk, palm silhouettes, polished stone reflections. Left 45% near-black emerald negative space for HTML project title. Premium cinematic architectural visualization, restrained refined gold highlights, dark navy edges. No text no letters no logos no UI no devices. Illustrative concept artwork.

### neon-nearmiss.webp

Prompt: Use case: stylized-concept. Standalone landscape 3:2 conceptual editorial background for NearMiss road-safety computer vision project. Winding contemporary road on right half leading toward a distant Dubai-inspired skyline at blue hour, one dark silver car seen from rear, elegant luminous lime-green trajectory lines tracing its route, subtle ghosted tracking outlines, dark navy rocky desert mountains. Left 45% deep navy black negative space for HTML titles. Sophisticated cinematic technology campaign, realistic details, atmospheric mist, restrained lime accents, premium art direction. No text no letters no numbers no logos no interface panels. This is conceptual art, not a real analytics screenshot.

### neon-kids.webp

Prompt: Use case: stylized-concept. Standalone landscape 3:2 conceptual editorial background for AI Kids Club educational mobile project. Friendly original small rounded white and lavender robot with glossy black faceplate and smiling cyan LED eyes, waving, floating on right half of frame above lavender rocky clouds, tiny ringed coral planet behind, magical purple night sky and subtle stardust. Premium stylized 3D character render, joyful and polished, toy-like soft materials, gentle cinematic purple light. Left 45% dark plum/navy negative space for HTML text, near-black navy edges. No text no letters no numbers no logos no UI no devices. Concept illustration not the app's official mascot.

## Verification

Production build and TypeScript compilation passed. Browser checks covered the desktop/mobile layouts, menu open/close and section navigation, project navigation, experience expansion, combined archive search/category filtering, empty results, and filter reset. No Lighthouse score or cross-browser compatibility claim is made. Changes have not been pushed or deployed.

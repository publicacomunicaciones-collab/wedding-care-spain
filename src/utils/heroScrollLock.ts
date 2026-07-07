export const HERO_UNLOCK_EVENT = 'wc:unlock-hero-scroll';

/**
 * ScrollExpandMedia hijacks wheel/scroll input on the homepage hero and
 * snaps window scroll back to 0 until its own "scroll to expand" gesture
 * completes. Call this before any programmatic scrollIntoView so nav
 * links and CTAs can jump past the hero without being reset.
 */
export function unlockHeroScroll() {
  window.dispatchEvent(new Event(HERO_UNLOCK_EVENT));
}

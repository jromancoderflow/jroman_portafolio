import type { SocialLink } from '~/types'

// Configure real URLs here. Empty strings are hidden from the UI.
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/jromancoderflow', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorgeRomanDev/', icon: 'linkedin' },
]

export const cvUrl = '/documents/cv.pdf'
export const email = 'jorgeromanpdev@gmail.com'
// Stored for reference; not rendered publicly by default (see brief: no phone without authorization).
export const phone = '+56 9 5206 5330'

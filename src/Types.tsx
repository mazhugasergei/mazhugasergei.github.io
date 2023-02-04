export type textType = {
  header: headerType | undefined,
  hero: heroType | undefined,
  about: aboutType | undefined,
  works: worksType | undefined,
  footer: footerType | undefined
}

export type headerType = {
  home: string | null,
  about: string | null,
  works: string | null,
  conatct: string | null
}

export type heroType = {
  heading: string | null,
  paragraph: string | null,
  contact: string | null
}

export type aboutType = {
  title: string | null,
  subtitle: string | null,
  heading: string | null,
  paragraph: string | null,
  skills: string | null
}

export type worksType = {
  title: string | null,
  subtitle: string | null,
  cards: {
    [key: string]: {
      url: string | null,
      title: string | null,
      paragraph: string | null,
      using: string | null
    }
  }
}

export type footerType = {
  language: string | null
}
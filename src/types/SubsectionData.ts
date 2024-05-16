export type Section = {
  Type: string
} & any

export type TextSectionDetails = {
  Header: string
  HeadingParagraphs: string[]
  Subsections: [Section]
  FooterParagraphs: string[]
} & Section

export type ImageSectionDetails = {
  Header: string
  HeadingParagraphs: string[]
  FooterParagraphs: string[]
  WrappedParagraphs: string[]
  Image: {
    AltText: string
    Class: string
    Float: string
    Name: string
  }
} & Section

export type NavSectionDetails = {
  NavHeader: string
  NavContent: [Section]
} & Section

export type LinkSectionDetails = {
  Header: string
  LinkItems: { Id: string; Label: string; Href: string; LinkText: string }[]
} & Section

export type ListSectionDetails = {
  Header: string
  Items: string[]
}

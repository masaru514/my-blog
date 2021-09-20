/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly pageNumber: Maybe<Scalars['Int']>;
  readonly humanPageNumber: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly limit: Maybe<Scalars['Int']>;
  readonly numberOfPages: Maybe<Scalars['Int']>;
  readonly previousPagePath: Maybe<Scalars['String']>;
  readonly nextPagePath: Maybe<Scalars['String']>;
  readonly pageId: Maybe<Scalars['String']>;
  readonly previousItem: Maybe<SitePageContextPreviousItem>;
  readonly previousPageId: Maybe<Scalars['String']>;
  readonly nextItem: Maybe<SitePageContextNextItem>;
  readonly nextPageId: Maybe<Scalars['String']>;
};

type SitePageContextPreviousItem = {
  readonly id: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Maybe<SitePageContextPreviousItemBody>;
};

type SitePageContextPreviousItemBody = {
  readonly id: Maybe<Scalars['String']>;
  readonly childMarkdownRemark: Maybe<SitePageContextPreviousItemBodyChildMarkdownRemark>;
};

type SitePageContextPreviousItemBodyChildMarkdownRemark = {
  readonly html: Maybe<Scalars['String']>;
};

type SitePageContextNextItem = {
  readonly id: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Maybe<SitePageContextNextItemBody>;
};

type SitePageContextNextItemBody = {
  readonly id: Maybe<Scalars['String']>;
  readonly childMarkdownRemark: Maybe<SitePageContextNextItemBodyChildMarkdownRemark>;
};

type SitePageContextNextItemBodyChildMarkdownRemark = {
  readonly html: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
  readonly subPluginPaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly trackingIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginConfig: Maybe<SitePluginPluginOptionsPluginConfig>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly stages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly options: Maybe<SitePluginPluginOptionsOptions>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly prettier: Maybe<SitePluginPluginOptionsPrettier>;
  readonly eslint: Maybe<SitePluginPluginOptionsEslint>;
  readonly commonmark: Maybe<Scalars['Boolean']>;
  readonly footnotes: Maybe<Scalars['Boolean']>;
  readonly pedantic: Maybe<Scalars['Boolean']>;
  readonly gfm: Maybe<Scalars['Boolean']>;
  readonly fonts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly display: Maybe<Scalars['String']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly displayName: Maybe<Scalars['Boolean']>;
  readonly fileName: Maybe<Scalars['Boolean']>;
  readonly minify: Maybe<Scalars['Boolean']>;
  readonly namespace: Maybe<Scalars['String']>;
  readonly transpileTemplateLiterals: Maybe<Scalars['Boolean']>;
  readonly pure: Maybe<Scalars['Boolean']>;
  readonly disableVendorPrefixes: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginConfig = {
  readonly head: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsOptions = {
  readonly emitWarning: Maybe<Scalars['Boolean']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly exclude: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsPrettier = {
  readonly patterns: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEslint = {
  readonly patterns: Maybe<Scalars['String']>;
  readonly customOptions: Maybe<SitePluginPluginOptionsEslintCustomOptions>;
};

type SitePluginPluginOptionsEslintCustomOptions = {
  readonly fix: Maybe<Scalars['Boolean']>;
  readonly cache: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};


type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  cornerRadius?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulMasaru514Blog = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly body: Maybe<contentfulMasaru514BlogBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMasaru514BlogSys>;
  /** Returns all children nodes filtered by type contentfulMasaru514BlogBodyTextNode */
  readonly childrenContentfulMasaru514BlogBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulMasaru514BlogBodyTextNode>>>;
  /** Returns the first child node of type contentfulMasaru514BlogBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulMasaru514Blog_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMasaru514Blog_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulMasaru514BlogSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulMasaru514BlogSysContentType>;
};

type ContentfulMasaru514BlogSysContentType = {
  readonly sys: Maybe<ContentfulMasaru514BlogSysContentTypeSys>;
};

type ContentfulMasaru514BlogSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type contentfulMasaru514BlogBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulMasaru514BlogBodyTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulMasaru514BlogBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulMasaru514Blog: Maybe<ContentfulMasaru514Blog>;
  readonly allContentfulMasaru514Blog: ContentfulMasaru514BlogConnection;
  readonly contentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNode>;
  readonly allContentfulMasaru514BlogBodyTextNode: contentfulMasaru514BlogBodyTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  subPluginPaths: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMasaru514BlogArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  body: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMasaru514BlogSysFilterInput>;
  childrenContentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNodeFilterListInput>;
  childContentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulMasaru514BlogArgs = {
  filter: Maybe<ContentfulMasaru514BlogFilterInput>;
  sort: Maybe<ContentfulMasaru514BlogSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMasaru514BlogBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulMasaru514BlogBodyTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulMasaru514BlogBodyTextNodeArgs = {
  filter: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
  sort: Maybe<contentfulMasaru514BlogBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly pageNumber: Maybe<IntQueryOperatorInput>;
  readonly humanPageNumber: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly numberOfPages: Maybe<IntQueryOperatorInput>;
  readonly previousPagePath: Maybe<StringQueryOperatorInput>;
  readonly nextPagePath: Maybe<StringQueryOperatorInput>;
  readonly pageId: Maybe<StringQueryOperatorInput>;
  readonly previousItem: Maybe<SitePageContextPreviousItemFilterInput>;
  readonly previousPageId: Maybe<StringQueryOperatorInput>;
  readonly nextItem: Maybe<SitePageContextNextItemFilterInput>;
  readonly nextPageId: Maybe<StringQueryOperatorInput>;
};

type SitePageContextPreviousItemFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<SitePageContextPreviousItemBodyFilterInput>;
};

type SitePageContextPreviousItemBodyFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly childMarkdownRemark: Maybe<SitePageContextPreviousItemBodyChildMarkdownRemarkFilterInput>;
};

type SitePageContextPreviousItemBodyChildMarkdownRemarkFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
};

type SitePageContextNextItemFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<SitePageContextNextItemBodyFilterInput>;
};

type SitePageContextNextItemBodyFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly childMarkdownRemark: Maybe<SitePageContextNextItemBodyChildMarkdownRemarkFilterInput>;
};

type SitePageContextNextItemBodyChildMarkdownRemarkFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  readonly subPluginPaths: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly trackingIds: Maybe<StringQueryOperatorInput>;
  readonly pluginConfig: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly stages: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly prettier: Maybe<SitePluginPluginOptionsPrettierFilterInput>;
  readonly eslint: Maybe<SitePluginPluginOptionsEslintFilterInput>;
  readonly commonmark: Maybe<BooleanQueryOperatorInput>;
  readonly footnotes: Maybe<BooleanQueryOperatorInput>;
  readonly pedantic: Maybe<BooleanQueryOperatorInput>;
  readonly gfm: Maybe<BooleanQueryOperatorInput>;
  readonly fonts: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly displayName: Maybe<BooleanQueryOperatorInput>;
  readonly fileName: Maybe<BooleanQueryOperatorInput>;
  readonly minify: Maybe<BooleanQueryOperatorInput>;
  readonly namespace: Maybe<StringQueryOperatorInput>;
  readonly transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
  readonly pure: Maybe<BooleanQueryOperatorInput>;
  readonly disableVendorPrefixes: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginConfigFilterInput = {
  readonly head: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsOptionsFilterInput = {
  readonly emitWarning: Maybe<BooleanQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly exclude: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPrettierFilterInput = {
  readonly patterns: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEslintFilterInput = {
  readonly patterns: Maybe<StringQueryOperatorInput>;
  readonly customOptions: Maybe<SitePluginPluginOptionsEslintCustomOptionsFilterInput>;
};

type SitePluginPluginOptionsEslintCustomOptionsFilterInput = {
  readonly fix: Maybe<BooleanQueryOperatorInput>;
  readonly cache: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.pageNumber'
  | 'context.humanPageNumber'
  | 'context.skip'
  | 'context.limit'
  | 'context.numberOfPages'
  | 'context.previousPagePath'
  | 'context.nextPagePath'
  | 'context.pageId'
  | 'context.previousItem.id'
  | 'context.previousItem.tags'
  | 'context.previousItem.title'
  | 'context.previousItem.updatedAt'
  | 'context.previousItem.createdAt'
  | 'context.previousItem.slug'
  | 'context.previousItem.body.id'
  | 'context.previousPageId'
  | 'context.nextItem.id'
  | 'context.nextItem.tags'
  | 'context.nextItem.title'
  | 'context.nextItem.updatedAt'
  | 'context.nextItem.createdAt'
  | 'context.nextItem.slug'
  | 'context.nextItem.body.id'
  | 'context.nextPageId'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.trackingIds'
  | 'pluginCreator.pluginOptions.pluginConfig.head'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.spaceId'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.environment'
  | 'pluginCreator.pluginOptions.downloadLocal'
  | 'pluginCreator.pluginOptions.forceFullSync'
  | 'pluginCreator.pluginOptions.pageLimit'
  | 'pluginCreator.pluginOptions.assetDownloadWorkers'
  | 'pluginCreator.pluginOptions.useNameForId'
  | 'pluginCreator.pluginOptions.stages'
  | 'pluginCreator.pluginOptions.options.emitWarning'
  | 'pluginCreator.pluginOptions.options.failOnError'
  | 'pluginCreator.pluginOptions.options.extensions'
  | 'pluginCreator.pluginOptions.options.exclude'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.extensions'
  | 'pluginCreator.pluginOptions.lessBabel'
  | 'pluginCreator.pluginOptions.mediaTypes'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.prettier.patterns'
  | 'pluginCreator.pluginOptions.eslint.patterns'
  | 'pluginCreator.pluginOptions.commonmark'
  | 'pluginCreator.pluginOptions.footnotes'
  | 'pluginCreator.pluginOptions.pedantic'
  | 'pluginCreator.pluginOptions.gfm'
  | 'pluginCreator.pluginOptions.fonts'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.displayName'
  | 'pluginCreator.pluginOptions.fileName'
  | 'pluginCreator.pluginOptions.minify'
  | 'pluginCreator.pluginOptions.namespace'
  | 'pluginCreator.pluginOptions.transpileTemplateLiterals'
  | 'pluginCreator.pluginOptions.pure'
  | 'pluginCreator.pluginOptions.disableVendorPrefixes'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreator.subPluginPaths'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.trackingIds'
  | 'pluginOptions.pluginConfig.head'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.spaceId'
  | 'pluginOptions.host'
  | 'pluginOptions.environment'
  | 'pluginOptions.downloadLocal'
  | 'pluginOptions.forceFullSync'
  | 'pluginOptions.pageLimit'
  | 'pluginOptions.assetDownloadWorkers'
  | 'pluginOptions.useNameForId'
  | 'pluginOptions.stages'
  | 'pluginOptions.options.emitWarning'
  | 'pluginOptions.options.failOnError'
  | 'pluginOptions.options.extensions'
  | 'pluginOptions.options.exclude'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.extensions'
  | 'pluginOptions.lessBabel'
  | 'pluginOptions.mediaTypes'
  | 'pluginOptions.root'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.prettier.patterns'
  | 'pluginOptions.eslint.patterns'
  | 'pluginOptions.eslint.customOptions.fix'
  | 'pluginOptions.eslint.customOptions.cache'
  | 'pluginOptions.commonmark'
  | 'pluginOptions.footnotes'
  | 'pluginOptions.pedantic'
  | 'pluginOptions.gfm'
  | 'pluginOptions.fonts'
  | 'pluginOptions.display'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.displayName'
  | 'pluginOptions.fileName'
  | 'pluginOptions.minify'
  | 'pluginOptions.namespace'
  | 'pluginOptions.transpileTemplateLiterals'
  | 'pluginOptions.pure'
  | 'pluginOptions.disableVendorPrefixes'
  | 'pluginOptions.pathCheck'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords'
  | 'subPluginPaths'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMasaru514BlogBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulMasaru514BlogBodyTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulMasaru514BlogBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type ContentfulMasaru514BlogSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulMasaru514BlogSysContentTypeFilterInput>;
};

type ContentfulMasaru514BlogSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulMasaru514BlogSysContentTypeSysFilterInput>;
};

type ContentfulMasaru514BlogSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulMasaru514BlogBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
};

type ContentfulMasaru514BlogConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMasaru514BlogEdge>;
  readonly nodes: ReadonlyArray<ContentfulMasaru514Blog>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMasaru514BlogGroupConnection>;
};


type ContentfulMasaru514BlogConnection_distinctArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogConnection_maxArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogConnection_minArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogConnection_sumArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMasaru514BlogFieldsEnum;
};

type ContentfulMasaru514BlogEdge = {
  readonly next: Maybe<ContentfulMasaru514Blog>;
  readonly node: ContentfulMasaru514Blog;
  readonly previous: Maybe<ContentfulMasaru514Blog>;
};

type ContentfulMasaru514BlogFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'tags'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMdx'
  | 'body.childrenMdx.rawBody'
  | 'body.childrenMdx.fileAbsolutePath'
  | 'body.childrenMdx.frontmatter.title'
  | 'body.childrenMdx.slug'
  | 'body.childrenMdx.body'
  | 'body.childrenMdx.excerpt'
  | 'body.childrenMdx.headings'
  | 'body.childrenMdx.headings.value'
  | 'body.childrenMdx.headings.depth'
  | 'body.childrenMdx.html'
  | 'body.childrenMdx.mdxAST'
  | 'body.childrenMdx.tableOfContents'
  | 'body.childrenMdx.timeToRead'
  | 'body.childrenMdx.wordCount.paragraphs'
  | 'body.childrenMdx.wordCount.sentences'
  | 'body.childrenMdx.wordCount.words'
  | 'body.childrenMdx.id'
  | 'body.childrenMdx.parent.id'
  | 'body.childrenMdx.parent.children'
  | 'body.childrenMdx.children'
  | 'body.childrenMdx.children.id'
  | 'body.childrenMdx.children.children'
  | 'body.childrenMdx.internal.content'
  | 'body.childrenMdx.internal.contentDigest'
  | 'body.childrenMdx.internal.description'
  | 'body.childrenMdx.internal.fieldOwners'
  | 'body.childrenMdx.internal.ignoreType'
  | 'body.childrenMdx.internal.mediaType'
  | 'body.childrenMdx.internal.owner'
  | 'body.childrenMdx.internal.type'
  | 'body.childMdx.rawBody'
  | 'body.childMdx.fileAbsolutePath'
  | 'body.childMdx.frontmatter.title'
  | 'body.childMdx.slug'
  | 'body.childMdx.body'
  | 'body.childMdx.excerpt'
  | 'body.childMdx.headings'
  | 'body.childMdx.headings.value'
  | 'body.childMdx.headings.depth'
  | 'body.childMdx.html'
  | 'body.childMdx.mdxAST'
  | 'body.childMdx.tableOfContents'
  | 'body.childMdx.timeToRead'
  | 'body.childMdx.wordCount.paragraphs'
  | 'body.childMdx.wordCount.sentences'
  | 'body.childMdx.wordCount.words'
  | 'body.childMdx.id'
  | 'body.childMdx.parent.id'
  | 'body.childMdx.parent.children'
  | 'body.childMdx.children'
  | 'body.childMdx.children.id'
  | 'body.childMdx.children.children'
  | 'body.childMdx.internal.content'
  | 'body.childMdx.internal.contentDigest'
  | 'body.childMdx.internal.description'
  | 'body.childMdx.internal.fieldOwners'
  | 'body.childMdx.internal.ignoreType'
  | 'body.childMdx.internal.mediaType'
  | 'body.childMdx.internal.owner'
  | 'body.childMdx.internal.type'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode'
  | 'childrenContentfulMasaru514BlogBodyTextNode.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.parent.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.children.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.body'
  | 'childrenContentfulMasaru514BlogBodyTextNode.sys.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.rawBody'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.slug'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.body'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.excerpt'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.headings'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.headings.value'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.html'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.rawBody'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.slug'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.body'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.excerpt'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.headings'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.headings.value'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.headings.depth'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.html'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.mdxAST'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.tableOfContents'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.timeToRead'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.words'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMdx.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.id'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.parent.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.children'
  | 'childContentfulMasaru514BlogBodyTextNode.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.children.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.children.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.children.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.children.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.children.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.body'
  | 'childContentfulMasaru514BlogBodyTextNode.sys.type'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.rawBody'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.slug'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.body'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.excerpt'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.headings'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.headings.value'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.headings.depth'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.html'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.mdxAST'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.tableOfContents'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.timeToRead'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.wordCount.words'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMdx.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.rawBody'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.frontmatter.title'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.slug'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.body'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.excerpt'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.headings'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.headings.value'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.headings.depth'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.html'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.mdxAST'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.tableOfContents'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.timeToRead'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.sentences'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.wordCount.words'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.childMdx.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulMasaru514BlogBodyTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulMasaru514BlogGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMasaru514BlogEdge>;
  readonly nodes: ReadonlyArray<ContentfulMasaru514Blog>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMasaru514BlogGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulMasaru514BlogGroupConnection_distinctArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogGroupConnection_maxArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogGroupConnection_minArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogGroupConnection_sumArgs = {
  field: ContentfulMasaru514BlogFieldsEnum;
};


type ContentfulMasaru514BlogGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMasaru514BlogFieldsEnum;
};

type ContentfulMasaru514BlogFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMasaru514BlogSysFilterInput>;
  readonly childrenContentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNodeFilterListInput>;
  readonly childContentfulMasaru514BlogBodyTextNode: Maybe<contentfulMasaru514BlogBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulMasaru514BlogSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulMasaru514BlogFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMasaru514BlogBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMasaru514BlogBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMasaru514BlogBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMasaru514BlogBodyTextNodeGroupConnection>;
};


type contentfulMasaru514BlogBodyTextNodeConnection_distinctArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeConnection_maxArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeConnection_minArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeConnection_sumArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};

type contentfulMasaru514BlogBodyTextNodeEdge = {
  readonly next: Maybe<contentfulMasaru514BlogBodyTextNode>;
  readonly node: contentfulMasaru514BlogBodyTextNode;
  readonly previous: Maybe<contentfulMasaru514BlogBodyTextNode>;
};

type contentfulMasaru514BlogBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulMasaru514BlogBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMasaru514BlogBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMasaru514BlogBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMasaru514BlogBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulMasaru514BlogBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeGroupConnection_minArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};


type contentfulMasaru514BlogBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMasaru514BlogBodyTextNodeFieldsEnum;
};

type contentfulMasaru514BlogBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulMasaru514BlogBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Unnamed_1_QueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type Unnamed_1_Query = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMasaru514Blog, 'id' | 'tags' | 'title' | 'updatedAt' | 'createdAt' | 'slug'>
      & { readonly body: Maybe<(
        Pick<contentfulMasaru514BlogBodyTextNode, 'id'>
        & { readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }
      )> }
    )> }, readonly file: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixedFragment> }> }> };

type Unnamed_2_QueryVariables = Exact<{
  pageId: Scalars['String'];
}>;


type Unnamed_2_Query = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMasaru514Blog, 'id' | 'tags' | 'title' | 'updatedAt' | 'createdAt' | 'slug'>
      & { readonly body: Maybe<(
        Pick<contentfulMasaru514BlogBodyTextNode, 'id'>
        & { readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }
      )> }
    )> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ defaultTitle: SiteSiteMetadata['title'], defaultDescription: SiteSiteMetadata['description'] }> }> };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly images: { readonly edges: ReadonlyArray<{ readonly node: Pick<File, 'relativePath' | 'name'> }> } };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}
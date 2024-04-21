import {
  Angular,
  Aws,
  Bubble,
  Csharp,
  Django,
  Docker,
  DotNet,
  Javascript,
  NextJs,
  NodeJs,
  Python,
  React,
  Typescript,
  Webflow,
} from './icons'

export const IconComponents = {
  dotnet: DotNet,
  react: React,
  angular: Angular,
  nextJs: NextJs,
  nodeJs: NodeJs,
  django: Django,
  javascript: Javascript,
  typescript: Typescript,
  csharp: Csharp,
  python: Python,
  aws: Aws,
  docker: Docker,
  webflow: Webflow,
  bubble: Bubble,
}

type AppIconProps = {
  kind: keyof typeof IconComponents
  size?: number
  color?: string
}

const AppIcon = ({ kind, size = 8, color = '#fff' }: AppIconProps) => {
  const SocialSvg = IconComponents[kind]

  return <SocialSvg className={`h-${size} w-${size}`} fill={color} />
}

export default AppIcon

import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={600}
        viewBox="0 0 400 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="40" y="0" rx="10" ry="10" width="300" height="400" />
        <rect x="40" y="275" rx="12" ry="12" width="160" height="36" />
        <rect x="40" y="410" rx="10" ry="10" width="300" height="60" />
    </ContentLoader>
)

export default Skeleton
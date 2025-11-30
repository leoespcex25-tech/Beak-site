import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const OptimizedImage = ({ alt, loading = "lazy", decoding = "async", ...props }: Props) => {
  return <img alt={alt} loading={loading} decoding={decoding} {...props} />;
};

export default OptimizedImage;

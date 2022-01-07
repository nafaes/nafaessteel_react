import React from "react";
import ContentLoader from "react-content-loader";

export default function ProductLoader(props) {
  const count = props.count ? parseInt(props.count) : 1;
  return (
    <>
      {[...Array(count)].map((item, index) => {
        return (
          <ContentLoader
            key={index}
            viewBox="0 0 540 440"
            height={300}
            width={350}
            backgroundColor="#f2f2f2"
            foregroundColor="#f2f2f2"
            {...props}
          >
            <rect x="100" y="17" rx="6" ry="6" width="340" height="360" />
            <rect x="100" y="397" rx="2" ry="10" width="275" height="15" />
            <rect x="100" y="417" rx="2" ry="10" width="140" height="15" />
          </ContentLoader>
        );
      })}
    </>
  );
}

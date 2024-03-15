import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Container = (props: Props) => {
  return (
    <div className={`max-w-[2000px] mx-auto px-10 lg:px-24 w-full ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;

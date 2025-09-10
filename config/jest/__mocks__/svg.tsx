import React, { SVGProps, type ForwardRefRenderFunction }  from 'react';

const SvgrMock: ForwardRefRenderFunction<SVGSVGElement, SVGProps<SVGSVGElement>> = (
  (props, ref) => <svg ref={ref} {...props} />
);

export const ReactComponent = SvgrMock;
export default SvgrMock;
import { forwardRef } from 'react';

export default forwardRef(function Circle({ props }, ref) {
  return (
    <div
      className="absolute -bottom-96 -right-40  w-96 py-64 rounded-full z-50 bg-amber-600 overflow-hidden"
      ref={ref}
    ></div>
  );
});

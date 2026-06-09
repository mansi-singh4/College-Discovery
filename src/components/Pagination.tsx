import React from 'react'

const Pagination = () => {
  return (
    <div className="mt-12 flex justify-center items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-md text-label-md">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md transition-colors">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md transition-colors">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md transition-colors">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>

  )
}

export default Pagination
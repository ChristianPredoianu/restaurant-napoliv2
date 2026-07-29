import React from 'react';

export default function LunchListItem({ day, lunch }) {
  return (
    <li className='group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-6 md:p-7 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_20px_80px_rgba(120,0,0,0.35)]'>
      {/* BACKGROUND GLOW */}
      <div className='absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
        <div className='absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/20 blur-3xl' />
        <div className='absolute bottom-0 left-0 w-48 h-48 rounded-full bg-red-500/10 blur-3xl' />
      </div>

      {/* GLASS OVERLAY */}
      <div className='absolute inset-0 bg-white/[0.015] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

      {/* TOP */}
      <div className='relative z-10 flex items-start justify-between gap-4'>
        {/* DAY */}
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <div className='h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.9)]' />

            <p className='text-xs md:text-sm font-black uppercase tracking-[0.25em] text-red-400'>
              {day}
            </p>
          </div>

          {/* MODERN DIVIDER */}
          <div className='h-px w-20 bg-gradient-to-r from-red-500/80 to-transparent' />
        </div>

        {/* TIME BADGE */}
        <div className='rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300'>
            11:00 — 14:00
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className='relative z-10 mt-8'>
        <p className='text-lg md:text-xl leading-relaxed text-zinc-100 transition-all duration-300 group-hover:text-white'>
          {lunch}
        </p>
      </div>

      {/* BOTTOM */}
      <div className='relative z-10 mt-8 flex items-center justify-between'>
        {/* subtle text */}
        <p className='text-sm tracking-wide text-zinc-500'>Dagens lunch</p>
      </div>

      {/* SUBTLE NOISE/TEXTURE */}
      <div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none' />
    </li>
  );
}

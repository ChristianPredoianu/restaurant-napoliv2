import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const brandRed = '#991b1b';

export default forwardRef(function SocialMediaTab(props, ref) {
  return (
    <div
      ref={ref}
      className='flex flex-col items-center gap-5 px-3 py-5 rounded-l-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
    >
      {/* Facebook */}
      <a
        href='https://www.facebook.com/NapoliRestaurang'
        target='_blank'
        rel='noreferrer nofollow'
        className='group transition-transform hover:-translate-y-1'
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className='text-xl text-zinc-300 group-hover:text-white transition'
          style={{
            filter: 'drop-shadow(0 0 10px rgba(153,27,27,0.35))',
          }}
        />
      </a>

      {/* Instagram */}
      <a
        href='https://www.instagram.com/napoli_restaurang/'
        target='_blank'
        rel='noreferrer nofollow'
        className='group transition-transform hover:-translate-y-1'
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className='text-xl text-zinc-300 group-hover:text-white transition'
          style={{
            filter: 'drop-shadow(0 0 10px rgba(153,27,27,0.35))',
          }}
        />
      </a>

      {/* Email */}
      <a
        href='mailto:musti_076@napoli.com'
        className='group transition-transform hover:-translate-y-1'
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className='text-xl text-zinc-300 group-hover:text-white transition'
          style={{
            color: brandRed,
            filter: 'drop-shadow(0 0 12px rgba(153,27,27,0.5))',
          }}
        />
      </a>

      {/* Accent line */}
      <div
        className='w-[1px] h-10 mt-2 opacity-40'
        style={{ backgroundColor: brandRed }}
      />
    </div>
  );
});

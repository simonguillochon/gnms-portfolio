export default function SocialsComponent() {
  const socials: { name: string, src: string, ref: string }[] = [
    { name: 'LinkedIn', src: './src/resources/socials/Discord.svg', ref: '#' },
    { name: 'Github', src: './src/resources/socials/Github.svg', ref: '#' },
    { name: 'Spotify', src: './src/resources/socials/Gmail.svg', ref: 'mailto:simonguillochon1@gmail.com' },
    { name: 'Discord', src: './src/resources/socials/Linkedin.svg', ref: '#' },
    { name: 'Whatsapp', src: './src/resources/socials/Spotify.svg', ref: '#' },
    { name: 'Emails', src: './src/resources/socials/Whatsapp.svg', ref: '#' },
  ];

  const socialsList = socials.map(social =>
    <div className='white'>
      <a href={social.ref}>
        <img src={social.src}></img>
      </a>
    </div>
  );

  return (
    <div className='p-12 flex flex-row justify-evenly bg-base-200'>
      {socialsList}
    </div>
  )
}

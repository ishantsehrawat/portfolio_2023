import React from 'react';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';

import logo from "../asset/images/Logowhite.svg";
import line from "../asset/icons/yellowLine.svg";
import github from "../asset/icons/social icons white/github.png";
import google from "../asset/icons/social icons white/google.png";
import instagram from "../asset/icons/social icons white/instagram.png";
import twitter from "../asset/icons/social icons white/twitter.png";
import figma from "../asset/icons/social icons white/figma.png";
import dribbble from "../asset/icons/social icons white/dribbble.png";
// import discord from "../asset/icons/social icons white/discord.png";
import linkedin from "../asset/icons/social icons white/linkedin.png";

function ContactPage() {
  return (
    <div className='bg-black h-screen w-screen text-yellow-50'>
      {/* -----------------HEADER------------------ */}
      <div className="contactheader hover: bg-black">
          <Link to='/'>
            <img src={logo} className="logo" alt="" />
          </Link>
          <div className="menu">
            <Link to="/about" className="button special2">
              <p className='text-white'>About</p>
            </Link>
            <Link to="/work" className="button special2">
              <p className='text-white'>Work</p>
            </Link>
          </div>
        </div>
      {/* ------------------info------------------ */}
      <div className='pl-5'>
        <h1 className='text-9xl font-bold pt-48'>Contact</h1>
        <img src={line} className="pl-1 pt-5" alt="" />
        <div className='social flex pt-10 pl-1'>
          <a href='https://github.com/ishantsehrawat' className='mr-5 ' ><img className='w-10 h-10' src={github} alt="" /></a>
          <a href='https://www.linkedin.com/in/ishant-sehrawat-90b1341a4/' className='mr-5 ' ><img className='w-10 h-10' src={linkedin} alt="" /></a>
          <a href='https://www.figma.com/@ishantsehrawat' className='mr-5 ' ><img className='w-10 h-10' src={figma} alt="" /></a>
          <a href='https://dribbble.com/ishantsehrawat' className='mr-5 ' ><img className='w-10 h-10' src={dribbble} alt="" /></a>
          <a href='https://www.instagram.com/theishantsehrawat/' className='mr-5 ' ><img className='w-10 h-10' src={instagram} alt="" /></a>
          <a href='https://twitter.com/sehrawat_ishant' className='mr-5 ' ><img className='w-10 h-10' src={twitter} alt="" /></a>
          <a href='https://g.dev/ishantsehrawat' className='mr-5 ' ><img className='w-10 h-10' src={google} alt="" /></a>
          {/* <a href='' className='mr-5 ' ><img className='w-10 h-10' src={discord} alt="" /></a> */}
        </div>
        <p className='pt-7 text-2xl'>ishantsehrawat75@gmail.com</p>
        <p className='pt-3 text-2xl'>+91 9306432824</p>

        {/* ------------------form-------------------- */}
        <TextField className='text-white' id="standard-basic" label="Standard" variant="standard" />
      </div>
    </div>
    )
}

export default ContactPage
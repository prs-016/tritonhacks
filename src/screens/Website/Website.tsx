import React from "react";

export const Website = (): JSX.Element => {
  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: "400px",
        backgroundImage: "url('/assets/uploaded-asset-1776383855972-0.png')",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center top",
        fontFamily: "'Shantell Sans', Helvetica, sans-serif",
      }}
    >
      {/* ── TITLE SECTION (400×310) ──
          title.png already includes: ransom letters, 2026, zigzag, sun, crumpled papers
      */}
      <div className="relative w-full" style={{ height: "310px" }}>
        <img
          src="/assets/title.png"
          alt="TritonHacks 2026"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* ── ABOUT SECTION (605×369 → displayed 400×244) ──
          about@2x.png already includes: pink crumpled paper, daisy, blue snowflake, pushpin
      */}
      <div className="relative w-full" style={{ height: "244px" }}>
        <img
          src="/assets/about@2x.png"
          alt="About section"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Text on the pink crumpled paper area */}
        <p
          className="absolute text-black text-right leading-[1.5] pointer-events-none"
          style={{ fontSize: "12.5px", top: "38px", right: "16px", width: "218px" }}
        >
          TritonHacks is a weekend-long highschool hackathon, aimed at providing
          equitable opportunities for students to learn CS by creating a project
          in teams of up to 4.
        </p>
      </div>

      {/* ── SPONSORS SECTION ── */}
      <div className="relative w-full" style={{ height: "498px" }}>

        {/* SPONSORS ransom-letter header (cropped from reference) */}
        <img
          src="/assets/sponsors_header_crop.png"
          alt="Sponsors heading"
          className="absolute"
          style={{ top: "0px", left: "0px", width: "400px", height: "68px", objectFit: "cover" }}
        />

        {/* sponsors@2x.png (800×859 → 400×430): white lined paper, tan note, butterfly, paperclip, pushpin, star */}
        <img
          src="/assets/sponsors@2x.png"
          alt="Sponsors paper collage"
          className="absolute"
          style={{ top: "68px", left: "0px", width: "400px", height: "430px", objectFit: "cover", objectPosition: "top" }}
        />

        {/* Text: "Thanks to our sponsors…" overlaid on tan torn paper (right side) */}
        <p
          className="absolute text-black text-right leading-[1.45] pointer-events-none"
          style={{ fontSize: "14px", top: "178px", right: "14px", width: "148px", transform: "rotate(4deg)" }}
        >
          Thanks to our sponsors for making this event possible!
        </p>

        {/* CS foreach logo */}
        <img
          src="/assets/cs-foreach-logo.svg"
          alt="CS foreach"
          className="absolute object-contain"
          style={{ top: "339px", left: "40px", width: "90px", height: "22px" }}
        />

        {/* CSE UCSD badge */}
        <img
          src="/assets/cse-icon-1@2x.png"
          alt="CSE UCSD"
          className="absolute object-contain"
          style={{ top: "282px", left: "148px", width: "74px", height: "74px" }}
        />

        {/* UC San Diego / CReaTe */}
        <img
          src="/assets/ucsandiegologo-create-1024x631-2-1@2x.png"
          alt="UC San Diego CReaTe"
          className="absolute object-contain object-left"
          style={{ top: "365px", left: "14px", width: "112px", height: "68px" }}
        />

        {/* Jane Street */}
        <img
          src="/assets/logo-stacked-w-registration-black-1@2x.png"
          alt="Jane Street"
          className="absolute object-contain"
          style={{ top: "414px", left: "132px", width: "112px", height: "46px" }}
        />
      </div>

      {/* ── SIGN UP SECTION ── */}
      {/*
        clip-path-group-3.png (400×393): mostly transparent, green torn paper at bottom — acts as top separator
        group-5@2x.png (612×199 → 400×130): "sign up!" ransom letters
        clip-path-group-1@2x.png (531×439 → 331px tall): graph paper scrap, -6° rotated
        clip-path-group-4@2x.png (154×142): red star sticker cluster, top right
        clip-path-group-5@2x.png (77×71): red thumbtack
        img5/starburst.png: teal starburst, bottom right
        img5/red-stars.png: 3 red star stickers
      */}
      <div className="relative w-full" style={{ height: "393px" }}>
        {/* Full sign-up section background (green tearaway at bottom of previous section) */}
        <img
          src="/assets/clip-path-group-3.png"
          alt="Sign up section background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* "sign up!" ransom-letter header */}
        <img
          src="/assets/group-5@2x.png"
          alt="sign up!"
          className="absolute"
          style={{ top: "32px", left: "2px", width: "340px", height: "110px", objectFit: "contain", objectPosition: "left" }}
        />

        {/* Red star sticker cluster — top right */}
        <img
          src="/assets/img5/red-stars.png"
          alt="Red star stickers"
          className="absolute"
          style={{ top: "8px", right: "8px", width: "100px", objectFit: "contain" }}
        />

        {/* Graph paper scrap — angled lower-left */}
        <img
          src="/assets/clip-path-group-1@2x.png"
          alt="Graph paper"
          className="absolute"
          style={{ bottom: "24px", left: "0px", width: "265px", objectFit: "contain", transform: "rotate(-6deg)", transformOrigin: "bottom left" }}
        />

        {/* Red thumbtack pinning graph paper */}
        <img
          src="/assets/clip-path-group-5@2x.png"
          alt="Red thumbtack"
          className="absolute"
          style={{ bottom: "222px", left: "42px", width: "22px", height: "30px", objectFit: "contain" }}
        />

        {/* Red star sticker group (clip-path-group-4) — on the graph paper */}
        <img
          src="/assets/clip-path-group-4@2x.png"
          alt="Star sticker group"
          className="absolute"
          style={{ bottom: "100px", left: "60px", width: "90px", objectFit: "contain" }}
        />

        {/* Teal starburst with deadline text — bottom right */}
        <div
          className="absolute"
          style={{ bottom: "0px", right: "-10px", width: "200px", transform: "rotate(10deg)" }}
        >
          <img
            src="/assets/img5/starburst.png"
            alt="Teal starburst"
            className="w-full"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-white text-center leading-snug font-medium pointer-events-none"
            style={{ fontSize: "14px" }}
          >
            Sign up<br />deadline:<br />April 18th<br />11:59pm
          </div>
        </div>

        {/* "Sign up here!" handwritten text on the graph paper */}
        <a
          href="#"
          className="absolute text-black underline decoration-1"
          style={{
            fontSize: "30px",
            bottom: "38px",
            left: "8px",
            transform: "rotate(15deg)",
            transformOrigin: "left bottom",
            whiteSpace: "nowrap",
            zIndex: 50,
          }}
        >
          Sign up here!
        </a>
      </div>
    </div>
  );
};

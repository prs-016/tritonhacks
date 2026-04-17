export const Website = (): JSX.Element => {
  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        width: "400px",
        backgroundImage: "url('https://c.animaapp.com/7dlyAt6M/img/uploaded-asset-1776383855972-0.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        fontFamily: "'Shantell Sans', Helvetica, sans-serif",
      }}
    >
      {/* ── TITLE SECTION ── */}
      <div className="relative w-full" style={{ height: "310px" }}>
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/title.png"
          alt="Title"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* ── ABOUT SECTION ── */}
      <div className="relative w-full" style={{ height: "230px" }}>
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/about@2x.png"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <p
          className="absolute text-black text-[13px] text-right leading-[1.5]"
          style={{ top: "48px", right: "16px", width: "230px" }}
        >
          TritonHacks is a weekend-long highschool hackathon, aimed at providing
          equitable opportunities for students to learn CS by creating a project
          in teams of up to 4.
        </p>
      </div>

      {/* ── SPONSORS SECTION ── */}
      <div className="relative w-full" style={{ height: "429px" }}>
        {/* Big composited sponsors image as the base */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/sponsors@2x.png"
          alt="Sponsors"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Text: "Thanks to our sponsors…" on the torn paper (right side) */}
        <p
          className="absolute text-black text-[15px] text-right leading-[1.45]"
          style={{ top: "110px", right: "14px", width: "148px" }}
        >
          Thanks to our sponsors for making this event possible!
        </p>

        {/* CS foreach logo */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/cs-foreach-logo-1--vectorized--1.svg"
          alt="CS foreach"
          className="absolute object-contain"
          style={{ top: "203px", left: "44px", width: "77px", height: "19px" }}
        />

        {/* CSE UCSD badge */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/cse-icon-1@2x.png"
          alt="CSE UCSD"
          className="absolute object-contain"
          style={{ top: "156px", left: "137px", width: "62px", height: "62px" }}
        />

        {/* UC San Diego / CReaTe */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/ucsandiegologo-create-1024x631-2-1@2x.png"
          alt="UC San Diego CReaTe"
          className="absolute object-contain object-left"
          style={{ top: "226px", left: "18px", width: "101px", height: "62px" }}
        />

        {/* Jane Street */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/logo-stacked-w-registration-black-1@2x.png"
          alt="Jane Street"
          className="absolute object-contain"
          style={{ top: "269px", left: "124px", width: "99px", height: "41px" }}
        />
      </div>

      {/* ── SIGN UP SECTION ── */}
      <div className="relative w-full" style={{ height: "340px" }}>
        {/* Base collage: "SIGN UP!" cutout header + corkboard bg */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/clip-path-group-3.png"
          alt="Sign up background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Stars, starburst, deadline overlay */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/group-5@2x.png"
          alt="Sign up decorations"
          className="absolute object-contain object-bottom-right"
          style={{ bottom: 0, right: 0, width: "260px", height: "260px" }}
        />

        {/* Torn lined-paper note (grid paper for "sign up here!") */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/clip-path-group-1@2x.png"
          alt="Sign up note"
          className="absolute"
          style={{ bottom: "20px", left: "1px", width: "265px", height: "219px", objectFit: "contain" }}
        />

        {/* Red thumbtack */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/clip-path-group-4@2x.png"
          alt="Thumbtack"
          className="absolute"
          style={{ bottom: "146px", left: "40px", width: "22px", height: "31px", objectFit: "contain" }}
        />

        {/* Pink paperclip */}
        <img
          src="https://c.animaapp.com/7dlyAt6M/img/clip-path-group-5@2x.png"
          alt="Paperclip"
          className="absolute"
          style={{ bottom: "60px", left: "10px", width: "77px", height: "71px", objectFit: "contain" }}
        />

        {/* "Sign up here!" handwritten text */}
        <div
          className="absolute text-black text-[30px]"
          style={{
            bottom: "36px",
            left: "10px",
            transform: "rotate(15deg)",
            transformOrigin: "left bottom",
            whiteSpace: "nowrap",
          }}
 >
          Sign up here!
        </div>

        {/* Deadline text on teal starburst */}
        <div
          className="absolute text-white text-[14px] text-center leading-snug font-normal"
          style={{ bottom: "30px", right: "16px", width: "94px" }}
        >
          Sign up deadline:
          <br />
          April 18th
          <br />
          11:59pm
        </div>
      </div>
    </div>
  );
};
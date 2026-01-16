const CurvedSection = () => {
  return (
    <section className="relative w-full bg-[#FFC52C] ">
      
      {/* SVG CURVE */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 120 "
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C480,140 480,80 720,60 960,40 1200,40 1440,60 L1440,0 L0,0 Z"
          fill="white"
        />
      </svg>
      {/* <svg id="svg"  viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 292.5,147.75 585,145.5 825,158 C 1065,170.5 1252.5,197.75 1440,225 L 1440,400 " stroke="none" stroke-width="0" fill="#FFC52C" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0 bg-[]"></path></svg> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-32 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        
        <h2 className="text-4xl mt-4 md:text-4xl font-medium leading-tight">
          With the Right <br />
          Software, Great <br />
          Things Can Happen
        </h2>

        <p className="text-sm   md:text-sm max-w-md">
          I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>

      </div>
    </section>
  )
}

export default CurvedSection

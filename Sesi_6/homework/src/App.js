// import Hero from "./components/organisms/hero/Hero";
// import Main from "./components/organisms/main/Main";
// import Card from "./components/organisms/card/Card";
import Footer from "./components/organisms/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Explore from "./components/pages/explore/Explore";
import MeetUp from "./components/pages/meetup/MeetUp";
import Navigation from "./components/organisms/navbar/Navigation";

/*// React tanpa JSX 
return(
  React.DOM.nav({className: 'navigation-dark'},
  [React.DOM.h1({},
    React.DOM.a(
      {href: 'https://instagram.com/muhammadfahrial'},'Instagram'
    )
  ),
  React.DOM.form({},
    React.DOM.div({classNameL: 'form-group'},
    [
      React.DOM.label({for: 'search'}, 'Search'),
      React.DOM.input({type: 'email', className: 'email'})
    ])
  ),
  React.DOM.a({
    className: 'btn btn-primary', 
    href: 'https.instagram.com'
  }, 'Get the app')
])
)*/

/*// React dengan JSX
return (
  <nav className="navigation">
    <h1>
      <a href="https://instagram.com/muhammadfahrial">Instagram</a>
    </h1>
    <form action="">
      <input type="text" className="form-control" placeholder="search"/>
    </form>
    <a href="https://instagram.com" className='btn btn-primary'>Get the app</a>
  </nav>
)*/

// Hello World
// const App = () => {
//   return <h1>Hello World</h1>
// }

// Homework
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meetup" element={<MeetUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        {/* <Hero />
        <Main />
        <Card /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

{
  /* <nav className="navigation">
  <div className="nav-item">
    <a href="" className="">QTemu</a>
    <a href="" className="">Create Meetup</a>
    <a href="" className="">Explore</a>
  </div>        
  <div className="nav-login">
    <a href="">Login</a>
  </div>
</nav> */
}

{
  /* <div className="hero m-3">
  <div className="hero-image">
    <h1 className='bg-slate-400 w-36 h-36'></h1>
  </div>
  <div className="hero-text flex-col">
    <h1 className='font-bold mb-1'>Hactiv8 Meetup</h1>
      <p className='mr-10'>Location <span className='pl-8'>Jakarta, Indonesia</span></p> 
      <p className='mr-8'>Members <span className='pl-6'>1,078</span></p>
      <p className='mr-6'>Organizers <span className='pl-4'>Adhy Wiranata</span></p>
      <p className='mt-5'><a href="" className='btn'>Join Us</a></p>
  </div>
</div> */
}

{
  /* <h1 className='font-bold mx-3 my-2'>Next Meetup</h1>
<div className="next-meetup mx-9">
  <div className="text-content">
    <p>Awesome meetup and event</p>
    <p className='text-sm py-3 text-slate-500'>25 january 2019</p>
    <p>Hello, Javascript & Node.js Ninjas!</p>
    <p>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!</p>
    <p>The meetup format will contain some short stories and technical talks.</p>
    <p>If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.</p>
    <p className='py-3'>Remember to bring a photo ID to get through building security.</p>
    <p>-----</p>
    <p className='py-3'>See you there!</p>
    <p>Best,Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
  </div>
</div>

<h1 className='font-bold mx-3 my-2'>About Meetup</h1>
<div className="about-meetup mx-9">
  <p className='py-1'>Come and meet other developers interested in the Javascript and It's Library in the Greater Jakarta area.</p>
  <p>Twitter : <a href="">@jakartaJS </a>and we use the hastag #jakartajs</p>
</div>

<div className="member-title">
<h1 className='font-bold'>Members</h1>
<a href="" className='mr-6'>See all</a>
</div>

<div className="members mx-9">
    <h1 className='h-20 w-20 bg-slate-400 rounded-full'></h1>
  <div className="member-text">
    <p>Organizers</p>
    <p>Adhy Wiranata <span className='pl-9'>4 others.</span></p>
  </div>
</div> */
}

{
  /* <div className="past-title">
<h1 className='font-bold'>Past Meetups</h1>
<a href="" className='mr-6'>See all</a>
</div>
<div className="past-card flex mx-5 px-5 gap-5 justify-evenly flex-wrap">
  <div className="card1 w-72 bg-slate-300 p-4">
    <h1 className='font-bold font-bold border-b pb-2 border-black mb-2'>27 November 2017</h1>
    <p>#39 JakartaJS April Meetup with kumparan</p>
    <p className='pt-4'>139 <span className='text-sm py-3 text-slate-500'>went</span></p>
    <p className='pt-5'><a href="" className='btn'>View</a></p>
  </div>

  <div className="card1 w-72 bg-slate-300 p-4">
    <h1 className='font-bold border-b pb-2 border-black mb-2'>27 Oktober 2017</h1>
    <p>#38 JakartaJS April Meetup with BliBli</p>
    <p className='pt-4'>113 <span className='text-sm py-3 text-slate-500'>went</span></p>
    <p className='pt-5'><a href="" className='btn'>View</a></p>
  </div>

  <div className="card1 w-72 bg-slate-300 p-4">
    <h1 className='font-bold font-bold border-b pb-2 border-black mb-2'>27 September 2017</h1>
    <p>#39 JakartaJS April Meetup with Hactiv8</p>
    <p className='pt-4'>110 <span className='text-sm py-3 text-slate-500'>went</span></p>
    <p className='pt-5'><a href="" className='btn'>View</a></p>
  </div>
</div> */
}
{
  /* <p className='text-center border-black mt-14 py-8 border-t'>Copyright Hactiv8 2018</p> */
}

import { Instagram, Youtube, Music, Mail, Globe, Headphones } from 'lucide-react';

function Connect() {
  return (
    <div 
      className="min-h-screen bg-[#1a0f0f]"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B45309' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text">
            Let's Connect
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-amber-200/80 text-lg">Join me on this musical journey</p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Instagram size={24} />, name: 'Instagram', link: 'https://www.instagram.com/y_yuftn/', username: '@y_yuftn' },
            { icon: <Youtube size={24} />, name: 'YouTube', link: '#', username: 'Zakaria Official' },
            { icon: <Music size={24} />, name: 'SoundCloud', link: 'https://soundcloud.com/zakaria-mouaoual/', username: 'Yuftn' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-amber-900/30 to-red-900/20 p-6 rounded-xl border border-amber-900/20 backdrop-blur-sm hover:from-amber-900/40 hover:to-red-900/30 transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full group-hover:from-amber-600 group-hover:to-red-600 transition-all">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-amber-100">{social.name}</h3>
                  <p className="text-amber-300/60">{social.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Contact */}
            <a
              href="mailto:contact@zakariadj.com?subject=Booking%20Inquiry&body=Hello%20Yuftn%2C%0D%0A%0D%0AI'm%20interested%20in%20booking%20you%20for%20an%20event.%0D%0A%0D%0AEvent%20Details%3A%0D%0A-%20Date%3A%0D%0A-%20Location%3A%0D%0A-%20Type%20of%20Event%3A%0D%0A-%20Duration%3A%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!"
              className="group relative bg-gradient-to-br from-amber-900/30 to-red-900/20 p-8 rounded-xl border border-amber-900/20 backdrop-blur-sm hover:from-amber-900/40 hover:to-red-900/30 transition-all text-center"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-amber-100 mb-2">Email Me</h3>
              <p className="text-amber-300/60 mb-4">Send a booking inquiry</p>
              <span className="text-amber-500">contact@zakariadj.com</span>
            </a>

            {/* Interactive Music Card */}
            <div className="relative bg-gradient-to-br from-amber-900/30 to-red-900/20 p-8 rounded-xl border border-amber-900/20 backdrop-blur-sm group">
              <div className="text-center">
                <Headphones className="w-12 h-12 mx-auto mb-4 text-amber-500 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Listen While You Wait</h3>
                <p className="text-amber-300/60 mb-4">Check out my latest track</p>
                <iframe
                  width="100%"
                  height="80"
                  scrolling="no"
                  frameBorder="no"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1954667759&color=%23B45309&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Website Link */}
          <div className="text-center mt-12">
            <a 
              href="https://zakariadj.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-400 transition-colors"
            >
              <Globe size={20} />
              zakariadj.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
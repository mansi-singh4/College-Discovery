export default function Footer() {
  return (
    <>
      <footer className="bg-surface-container  fixed bottom-0 w-full border-t border-outline-variant">
<div className="w-full py-stack-lg px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-headline-md font-headline-md text-primary mb-2">EduDiscovery</span>
<p className="text-body-sm font-body-sm text-on-surface-variant text-center md:text-left">© 2024 EduDiscovery Platforms Inc. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-right gap-6">
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="#">About Us</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="#">Contact Support</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="#">College Partners</a>
</div>
</div>
</footer>
    </>
  );
}
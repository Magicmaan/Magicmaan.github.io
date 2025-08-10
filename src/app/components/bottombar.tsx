"use client";

function BottomBar() {
  // spinner animation

  return (
    <footer className="w-full pixel-border-t mt-12 h-32 px-8 grid grid-cols-3 justify-center items-center z-50">
      <div className="col-span-2 flex flex-col gap-2">
        <div className="font-bold">About</div>
        <div>
          <a
            href="https://github.com/Magicmaan"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Contact</div>
        <div>
          Email:{" "}
          <a
            href="mailto:theobaker99@gmail.com"
            className="text-blue-600 hover:underline"
          >
            theobaker99@gmail.com
          </a>
        </div>
        <div>
          Phone: <span className="text-gray-700">07847788653</span>
        </div>
      </div>
    </footer>
  );
}

export default BottomBar;

import { useState } from "react";

const OPTIONS = [
  {
    value: "Experiencia",
    url: "/#experiencia",
  },
  {
    value: "Proyectos",
    url: "/#proyectos",
  },
  {
    value: "Sobre mí",
    url: "/#sobremi",
  },
];

const MenuIcon = ({ classNames }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
};

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        class="hover:bg-slate-200 px-4 py-2 rounded-md dark:hover:text-black"
        onClick={handleOpen}
      >
        <MenuIcon classNames="size-5" />
      </button>

      {isOpen && (
        <div className="z-10 absolute right-3 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44">
          <ul className="py-2 text-sm text-gray-700">
            <a
              href="#inicio"
              className="block px-4 py-2 hover:bg-gray-200 "
            >
              Inicio
            </a>

            {OPTIONS.map((option) => (
              <a
                href={option.url}
                className="block px-4 py-2 hover:bg-gray-200 "
              >
                {option.value}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

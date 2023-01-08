import {useState} from 'react'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight, faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen min-w-full lineargradient">
      <div className="wave-background bg-white absolute bottom-8 mx-48 pb-16 pt-24 pl-28 pr-44 flex items-stretch justify-evenly rounded-3xl">
        <div className="min-h-max flex w-1/2 justify-center items-center">
          <img
            className="object-fill"
            src="https://64.media.tumblr.com/359162a227d296f75ba47c80d6cd1335/8f6607f25d6ab997-d4/s640x960/cdeeb80ec8e6ad36b5d0e6c85611fe7e57eda3b3.pnj"
            height={200}
            width={200}
            alt="astronauta"
          />
        </div>
        <div className="ml-1 w-1/2">
          <p className="relative w-fit -translate-x-1/2 text-xl uppercase tracking-widest">
            Testi<span className="pb-1 border-b-2 border-b-blue-900">mo</span>nials
          </p>
          <div className="mt-14 flex flex-col justify-end items-start">
            <FontAwesomeIcon className="text-3xl text-blue-900" icon={faQuoteLeft}/>
            <p className="mt-2 text-sm">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada, mauris cursus volutpat
              consectetur,
              mauris augue facilisis ipsum, nec mattis mauris ex ac tellus. Donec suscipit commodo erat, consectetur
              pretium sem venenatis in. Donec at ligula."
            </p>
            <span className="mt-2 text-blue-900 uppercase text-xs font-semibold">
              - Beth Rayland
            </span>
            <div className="flex mt-3 min-w-full justify-center gap-1">
              <div className="flex-1 h-0.5 bg-neutral-100 self-center" />
              <FontAwesomeIcon
                className="p-2 h-2 text-white font-bold bg-neutral-300 rounded-full"
                icon={faChevronLeft}
              />
              <FontAwesomeIcon
                className="p-2 h-2 text-white font-bold bg-blue-900 rounded-full"
                icon={faChevronRight}
              />
              <div className="flex-1 h-0.5 bg-neutral-100 self-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

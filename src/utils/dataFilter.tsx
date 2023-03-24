import { BiHistory } from 'react-icons/bi'
import { HiFolder } from 'react-icons/hi'
import {
  MdPhotoSizeSelectActual,
  MdOutlineInsertDriveFile,
} from 'react-icons/md'
import { RxLapTimer } from 'react-icons/Rx'

export const filterData = [
  {
    id: '6',
    text: 'Главная',
    value: 'main',
    icons: () => <HiFolder fontSize={18} />,
  },
  {
    id: '1',
    text: 'История',
    value: 'history',
    icons: () => <BiHistory fontSize={18} />,
  },
  {
    id: '2',
    text: 'Фото',
    value: 'photos',
    icons: () => <MdPhotoSizeSelectActual fontSize={18} />,
  },
  {
    id: '3',
    text: 'Файлы',
    value: 'files',
    icons: () => <MdOutlineInsertDriveFile fontSize={18} />,
  },
  {
    id: '4',
    text: 'Последние',
    value: 'last',
    icons: () => <RxLapTimer fontSize={18} />,
  },
]

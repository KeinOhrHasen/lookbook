'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { ENVIRONMENT } from '@/src/core/configs/environment';
import { IAlbum } from '@/app/_interfaces/albums.model';
import { MdFileDownload, MdFullscreen } from 'react-icons/md';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { selectGrids } from '@/lib/redux/features/grids/selectors';
import { list } from '@/lib/redux/features/grids/slice';

const initial = { gridId: '' };

interface Values {
  gridId: number | null;
}

export default function Album() {
  const params = useParams();
  const [album, setAlbum] = useState<IAlbum>(null);
  const [initialState, setInitialState] = useState<any>(initial);
  // const [className, setClassName] = useState<string>('grid gap-8 lg:gap-12 sm:grid-cols-3');
  const grids = useAppSelector(selectGrids);

  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    console.log(JSON.stringify(values));
    setSubmitting(false);

    axios
      .put(`${ENVIRONMENT.apiURL}/albums/${params.albumId}`, values)
      .then(function ({ data }) {
        updateLayout(album);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${ENVIRONMENT.apiURL}/album/${params.albumId}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function ({ data }) {
        setAlbum(data);
        setInitialState({ gridId: data.gridId });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function updateLayout(data) {
    // setInitialState({ gridId: data.gridId });
    // console.log('grids', grids);
    // const cols = grids.find((g) => g._id === data.gridId)?.columns;
    // console.log('cols', cols);
    // const newClassName = className + ' grid-cols-' + 12 / cols;
    // setClassName(newClassName);
    // console.log('newClassName', newClassName);
    // console.log('className', className);
  }

  const downloadPicture = (pictureUrl, index) => {
    const element = document.createElement('a');
    element.setAttribute('href', pictureUrl);
    element.setAttribute('download', album.name + index);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const openFullScreen = (pictureUrl, index) => {
    console.log('Open full screen mode');
  };

  return (
    <div className="px-24 py-12 bg-slate-300">
      <h1 className="title mb-6">Album {album?.name}</h1>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        {album &&
          album.pictures.map((picture, index) => (
            <div key={index} className="flex flex-col justify-center">
              <div className="flex flex-row justify-center relative w-full h-full">
                <Image
                  className="w-full h-full"
                  src={picture}
                  alt={album.name + index}
                  width={256}
                  height={256}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-0 right-0 flex flex-col gap-2">
                  <Button onClick={() => downloadPicture(picture, index)} className="ml-4">
                    <MdFileDownload />
                  </Button>
                  <Button onClick={() => openFullScreen(picture, index)} className="ml-4">
                    <MdFullscreen />
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <h1 className="title mt-6">{album?.name} grid setup</h1>
      <div className="flex items-center">
        <Formik initialValues={initialState} onSubmit={handleSubmit} enableReinitialize={true}>
          <Form>
            <div className="bg-slate-100 p-4 mt-4">
              <label htmlFor="gridId" className="pt-10 mr-8">
                Select album grid:
              </label>
              <Field as="select" name="gridId">
                {grids.map((grid) => (
                  <option key={grid._id} value={grid._id}>
                    {grid.name} ({grid.columns})
                  </option>
                ))}
              </Field>
            </div>
            <Button type="submit" className="block mt-8">
              Save grid configs
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { uploadFile } from '../services/file.service';
import { categoria } from '../services/categorias';
import { createBusiness } from '../services/business.service';
import CategorieManager from '../components/CategorieManager';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
export default function Utils() {
    const [page, setPage] = React.useState(0)
  return (
        <div className="page">
            <div className="left">
                <ul>
                    <li onClick={()=> setPage(0)}>Categorias</li>
                    <li onClick={()=> setPage(1)}>Procesador de imagenes</li>
                </ul>
            </div>
            <div className="rigth">
                {
                    page == 0 && <CategorieManager />
                }
            </div>
        </div>
  );
}
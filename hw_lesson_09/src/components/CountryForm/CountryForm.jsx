import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CountryForm() {
  const countries = useSelector(store => store.countries);
  const navigation = useNavigate();

  const [translations, setTranslations] = useState(countries.length ? Object.keys(countries[0].translations) : []);

  const [country, setCountry] = useState(countries[0] ? countries[0].name.official : {});
  const [translation, setTranslation] = useState(translations[0]);
  
  const handleSelectFilterCapital = (e) => {
      setCountry(e.target.value);
      let countryTranslations = countries.find((country) => country.name.official === e.target.value).translations;
      setTranslations(Object.keys(countryTranslations));
      setTranslation(Object.keys(countryTranslations)[0]);
  };
  
  const handleSelectFilterTranslation = (e) => setTranslation(e.target.value);
  
  const handleFilterSubmit = (e) => {
      e.preventDefault();
      navigation(`/countries/${country}?translation=${translation}`);
  };

  return countries.length ? (
    <Box sx={{ maxWidth: 450, mt: 2, ml: 3 }}>
      <Card elevation={4}>
        <FormControl sx={{ minWidth: 300, mt:2, ml: 3 }}>
          <InputLabel id="demo-simple-select-label">
            Select Capital
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Select Capital:"
            onChange={handleSelectFilterCapital}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.name.official}>
                {country.flag} {country.capital[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 300, mt:2, ml: 3 }}>
          <InputLabel id="demo-simple-select-label">
            Select Translation
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={translation}
            label="Select Translation:"
            onChange={handleSelectFilterTranslation}
          >
            {translations.map((key, index) => (
              <MenuItem key={index} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button sx={{m: 2}} variant="contained" startIcon={<ArrowForwardIcon/>} onClick={handleFilterSubmit}>Read more about {country}</Button>
      </Card>
    </Box>
  ) :null; 
}
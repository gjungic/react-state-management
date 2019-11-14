import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useAppState } from '../context';
import { fetchTvShowsSuccess } from '../context/actions/tv-show';

const TvShows = () => {
  const [{ tvShow: { shows } }, dispatch] = useAppState();
  const fetchTvShows = useMemo(() => async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    dispatch(fetchTvShowsSuccess(data));
  }, [dispatch]);

  useEffect(() => {
    fetchTvShows();
  }, [fetchTvShows]);

  return (
    <StyledWrapper>
      <h1>Batman Movies</h1>
      <ul>
      {shows.map(({ show: { id, name } }) => <li key={id}>{name}</li>)}
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 30px;
`;

export default TvShows;

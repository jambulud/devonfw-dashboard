import React from 'react';
import Layout from '../hoc/Layout';
import SpaceAround from '../hoc/SpaceAround';
import { makeStyles } from '@material-ui/core/styles';
import EclipseCard from '../components/cards/ide-cards/eclipse/eclipse-card.controller';
import VSCodeCard from '../components/cards/ide-cards/vscode-card/vscode-card.controller';
import IntellijCard from '../components/cards/ide-cards/intellij/intellij-card.controller';

const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-evenly',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Layout>
      <SpaceAround>
        <div className={classes.cardsContainer}>
          <EclipseCard></EclipseCard>
          <VSCodeCard></VSCodeCard>
          <IntellijCard></IntellijCard>
        </div>
      </SpaceAround>
    </Layout>
  );
}

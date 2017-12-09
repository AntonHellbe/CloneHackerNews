import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Main from '../components/main';
import CommentView from '../components/comment-view';

const routes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ Main } />
                <Route path="/article/comments/:id" component={ CommentView } />
            </Switch>

        </div>

    </BrowserRouter>
);

export default routes;
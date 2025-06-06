import { Routes } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },

    // Complexity: LOW 🤏🏾🤏🏾🤏🏾
    // We want to add a route that will redirect to the video detail page.
    // The route should be dynamic and should take the id from the url.
    // The id should be passed to the VideoDetailComponent.
    { path: 'SEE ROUTER DOCUMENTATION', component: VideoDetailComponent },
    

    // BONUS 🎉🎉🎉
    // We want to add a wildcard route that will redirect to the 404 page.
    // Create a new component for the 404 page.
    // { path: '**', component: PageNotFoundComponent } // Wildcard route
];

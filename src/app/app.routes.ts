import { Routes } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';

export const routes: Routes = [
    { path: 'video/:id', component: VideoDetailComponent },
    // Potentially other routes like a default route could go here
    // { path: '', redirectTo: '/some-default-path', pathMatch: 'full' }, 
    // { path: '**', component: PageNotFoundComponent } // Wildcard route
];

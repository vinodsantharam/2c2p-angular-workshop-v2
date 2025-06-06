import { Component } from '@angular/core';
import { HeaderInformationService } from './header-information.service';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header-information',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
            <p>{{ weatherTemperature }}°C</p>
            <lucide-icon name="thermometer-sun"></lucide-icon>
        </div>
        
        <div class="flex items-center gap-2">
            <p>#{{ videoCount }}</p>
            <lucide-icon name="video"></lucide-icon>
        </div>
    </div>
  `,
  styles: ``
})
export class HeaderInformationComponent {
    public weatherTemperature: string = '';
    public videoCount: number = 0;

    constructor(private headerInformationService: HeaderInformationService) {
        this.headerInformationService.getHeaderInformation().subscribe((headerInformation) => {
            this.weatherTemperature = headerInformation.weatherTemperature;
            this.videoCount = headerInformation.videoCount;
        });
    }
}
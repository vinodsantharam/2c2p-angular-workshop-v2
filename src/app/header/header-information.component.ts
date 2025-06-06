import { Component, Input } from '@angular/core';
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
    @Input() weatherTemperature: string = '';
    @Input() videoCount: number = 0;
}
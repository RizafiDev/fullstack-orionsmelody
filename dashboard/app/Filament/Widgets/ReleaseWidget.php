<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Release;
use Filament\Support\Enums\IconPosition;
use App\Models\User;

class ReleaseWidget extends BaseWidget
{
    protected function getStats(): array
    {

        $query = Release::query();

        // Jika user adalah artist, hanya tampilkan data miliknya berdasarkan email
        if (auth()->user()->role === User::ROLE_ARTIST) {
            $query->where('email', auth()->user()->email);
        }

        // Menghitung total release sesuai kondisi peran pengguna
        $totalRelease = $query->count();

        // Menghitung pending release (status 'review' atau 'rejected') sesuai kondisi peran pengguna
        $pendingRelease = $query->whereIn('status', ['review', 'rejected'])->count();

        // Menghitung release yang sudah disetujui (status 'approved') sesuai kondisi peran pengguna
        $released = $query->where('status', 'approved')->count();
        return [ 
            Stat::make('Total Release', $totalRelease)
                ->description('Total Release')
                ->descriptionIcon('heroicon-m-musical-note', IconPosition::Before)
                ->chart([1, 2, 5, 3, 20, 4, 1])
                ->color('info'),

            Stat::make('Pending Release', $pendingRelease)
                ->description('Need your action')
                ->descriptionIcon('heroicon-m-shield-exclamation', IconPosition::Before)
                ->chart([1, 2, 5, 3, 20, 4, 1])
                ->color('warning'),

            Stat::make('Released', $released)
                ->description('Success Music Released')
                ->descriptionIcon('heroicon-m-check', IconPosition::Before)
                ->chart([7, 2, 10, 3, 15, 4, 17])
                ->color('success'),
        ];
    }
}
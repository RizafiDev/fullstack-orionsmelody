<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AnalyticResource\Pages;
use App\Models\Artist;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\Release;
use App\Models\Revenue;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use App\Services\YouTubeService;
use App\Filament\Widgets\StreamChart;
use App\Services\SpotifyService;
use App\Models\User;

class AnalyticResource extends Resource
{
    protected static ?string $model = Release::class;


    protected static ?string $navigationIcon = 'heroicon-o-chart-bar-square';

    protected static ?string $navigationLabel = 'Analytics';

    protected static ?int $sort = 3;

    protected static ?string $modelLabel = 'Music Analytics';


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID'),
                Tables\Columns\TextColumn::make('upc')->label('UPC'),
                Tables\Columns\TextColumn::make('isrc')->label('ISRC'),
                Tables\Columns\TextColumn::make('artist_name')
                ->label('Artist Name'),
                Tables\Columns\TextColumn::make('title')->label('Release Tittle'),
                Tables\Columns\TextColumn::make('streams')
                ->label('Youtube Streams')
                ->getStateUsing(function ($record) {
                 $youtubeService = new YouTubeService();
                return $youtubeService->getTrackViews($record->artist_name, $record->title,);
                })
                ->formatStateUsing(fn($state) => number_format($state)),
                Tables\Columns\TextColumn::make('spotify_streams')
                ->label('Spotify Streams')
                ->getStateUsing(function ($record) {
                $spotifyService = new SpotifyService();
                return $spotifyService->getTrackStreamsByISRC($record->isrc);
                })
                ->formatStateUsing(fn($state) => $state ? number_format($state) : 'N/A'),
            
            
            ])
            ->filters([
            ]);
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(mixed $record): bool
    {
        return false;
    }

    public static function canDelete(mixed $record): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAnalytics::route('/'),
        ];
    }

    public static function getEloquentQuery(): Builder
{
    // Ambil query dasar dan filter hanya record dengan status 'approved'
    $query = parent::getEloquentQuery()->where('status', 'approved');
    
    // Jika user adalah admin atau editor, tampilkan semua data
    if (in_array(auth()->user()->role, [User::ROLE_ADMIN, User::ROLE_EDITOR])) {
        return $query;
    }
    
    // Jika user adalah artist, hanya tampilkan data miliknya berdasarkan email
    return $query->where('email', auth()->user()->email);
}



}
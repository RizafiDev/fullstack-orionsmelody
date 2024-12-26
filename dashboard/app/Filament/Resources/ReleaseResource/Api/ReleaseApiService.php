<?php
namespace App\Filament\Resources\ReleaseResource\Api;

use Rupadana\ApiService\ApiService;
use App\Filament\Resources\ReleaseResource;
use Illuminate\Routing\Router;


class ReleaseApiService extends ApiService
{
    protected static string | null $resource = ReleaseResource::class;

    public static function handlers() : array
    {
        return [
            Handlers\CreateHandler::class,
            Handlers\UpdateHandler::class,
            Handlers\DeleteHandler::class,
            Handlers\PaginationHandler::class,
            Handlers\DetailHandler::class
        ];

    }

    // Override method untuk memfilter data
    public static function modifyQuery($query)
    {
        return $query->where('status', 'approved');
    }
}

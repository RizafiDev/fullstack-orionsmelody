<?php
namespace App\Filament\Resources\ReleaseResource\Api\Handlers;

use Illuminate\Http\Request;
use Rupadana\ApiService\Http\Handlers;
use Spatie\QueryBuilder\QueryBuilder;
use App\Filament\Resources\ReleaseResource;

class PaginationHandler extends Handlers {

    public static bool $public = true;
    public static string | null $uri = '/';
    public static string | null $resource = ReleaseResource::class;



    public function handler(): mixed
    {
        $query = static::getEloquentQuery();
        $model = static::getModel();
    
        $query = QueryBuilder::for(subject: $query)
            ->allowedFields(fields: $this->getAllowedFields() ?? [])
            ->allowedSorts(sorts: $this->getAllowedSorts() ?? [])
            ->allowedFilters(filters: $this->getAllowedFilters() ?? [])
            ->allowedIncludes(includes: $this->getAllowedIncludes() ?? [])
            ->where('status', 'approved') // Filter hanya data dengan status approved
            ->orderBy('created_at', 'desc') // Urutkan berdasarkan created_at descending
            ->limit(5) // Batasi hanya 5 data terbaru
            ->paginate(perPage: request()->query(key: 'per_page') ?? 10)
            ->appends(key: request()->query());
    
        return static::getApiTransformer()::collection($query);
    }
    
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Release extends Model
{
    use HasFactory;

    const EXPLICIT_YES = 'YES';
    const EXPLICIT_NO = 'NO';


    const TYPE_VOCAL = 'VOCAL';
    const TYPE_INS = 'INS';


    const EXPLICIT = [
        self::EXPLICIT_YES => 'Yes',
        self::EXPLICIT_NO => 'No',
    ];
    const TYPE = [
        self::TYPE_VOCAL => 'Vocal',
        self::TYPE_INS => 'Instrumental',
    ];


    protected $table = 'releases'; 
    protected $fillable = [
        'isrc',
        'upc',
        'title',
        'featuring',
        'image_file_path',
        'type',
        'explicit',
        'email',         // Alamat email
        'artist_name',   // Nama artis
        'file_path',         // Path file musik
        'status',         // Path file musik
        'youtube_streams',
        'spotify_streams',
        
    ];
}

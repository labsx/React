<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'middle_name',
        'suffix',
        'job',
        'tittle',
        'phone_number',
        'email',
        'address',
    ];

    public function contact(): HasMany
    {
        return $this->hasMany(Skills::class, 'user_id', 'id');
    }
}

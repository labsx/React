<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
    'school_name',
    'user_id',
    'start_year',
    'end_year',
    'course_name',
    ];
}

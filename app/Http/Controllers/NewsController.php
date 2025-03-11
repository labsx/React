<?php

namespace App\Http\Controllers;

use App\Models\News;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewsController extends Controller
{
    public function index (Request $request) {

    $search = $request->input('q');

    return JsonResource::collection(News::where('title', 'like', "%${search}%")->paginate());
    }
    public function store (Request $request) {
        $news = News::create([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author,
            'published_at' =>Carbon::now(),
        ]);

        return new JsonResource($news);
    }

    public function update(Request $request, $id) {
        $news = News::findOrFail($id);

        if($news) {
            $news->update([
                'title' => $request->title,
                'content' => $request->content,
                'author' => $request->author,
                'published_at' =>Carbon::now(),
            ]);

            return new JsonResource($news);

        }else {
            return response()->json([
                'message' => 'Not Found'
            ], 404);
        }
    }

    public function destroy($id) {
        $news = News::findOrFail($id);

        if($news) {
            $news->delete();                    

            return response()->noContent();
        }else {
            return response()->json([
                'message' => 'Not Found'
            ], 404);
        }
    }

}

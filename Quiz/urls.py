from django.urls import path

from Quiz.views import QuizView

urlpatterns = [
    path('', QuizView.as_view(), name='quiz page'),
]
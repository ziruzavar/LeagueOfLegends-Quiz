from django.urls import path

from Quiz.views import QuizView, IndexView, FinishView

urlpatterns = [
    path('quiz/', QuizView.as_view(), name='quiz page'),
    path('', IndexView.as_view(), name='index'),
    path('quiz/finish/', FinishView.as_view(), name='finish page'),
]